import React, { useState, useEffect } from 'react';
import Votes from '../Votes';
import { Container } from './styles';
import Load from '../Load';
import { api } from '../../services/api';

const List: React.FC = () => {

    const [listItems, setListItems] = useState<any>();    
    const [isFetching, setIsFetching] = useState(true);

    const handleScroll = () => {
        // veririfica se chegou ao final da pagina
        if (
            window.innerHeight + document.documentElement.scrollTop !== 
            document.documentElement.offsetHeight
        )
        return;
        setIsFetching(true);
    };
    
    useEffect(() => {
        // 'ouvindo' o scroll
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {     
        if (!isFetching) return;
        const fetchMoreListItems =  () => {
            setTimeout(async () => {
                setIsFetching(false);
                try {
                    // aqui em uma api real deveria passar tb qual a proxima 'pagina' deveria ser carregada
                    // para efeito de testo só adicionei ao array os mesmos dados
                    await api.get('/courses').then(response => {
                        if(listItems === undefined){
                            setListItems(response.data);
                        } else {
                            setListItems([...listItems, ...response.data]);
                        }
                    })                    
                } catch (error) {
                    alert("Desculpe, tivemos um problema ao carregar os cursos.")
                }
                
            }, 2000);
        };
        fetchMoreListItems();
    }, [isFetching, listItems]);
   
    return (
        <>        
        <Container>
            {
            listItems !== undefined &&            
            listItems.map((e: any, i: number) => 
                <div key={i} className="box">
                    <img src={e.image} alt={e.title} />
                    <div className="status">
                        <Votes ratio={e.votes} />
                        <div className="lessons">{e.lessons} lessons</div>
                    </div>                    
                    <span className="title">{e.title}</span>                    
                </div>
                )
            }            
        </Container>
        <Load loading={isFetching} />
        </>
    );
}

export default List;