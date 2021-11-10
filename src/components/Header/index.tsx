import React, {useState} from 'react';
import logo from '../../assets/eduick-white.png';
import { Topo, Drop } from './styles';

const Header: React.FC = () => {

  const [drop, setDrop] = useState(false)

  return (
    <>
      <Topo>
          <div className="centro">
              <div>
                <img src={logo} alt="Eduick" height="18" className="logo" />
                <a className="myclasses" href="https://">My Classes</a>
              </div>

              <div>
                <div className="arrows" onClick={() => setDrop(!drop)}>
                  <span className="material-icons-outlined">
                    {!drop ? 'expand_more' : 'expand_less' }
                  </span>
                </div>
                <div className="btntopo">
                    Change to teacher mode
                </div>
                <div className="thumbspace">
                    <span className="newnotific"></span>
                    <img src="https://yt3.ggpht.com/UwYkZkyXDOogOivRLTv4DznNcQE9hGkSjjcTG7yCyAGyPsoGezkcvzdhUu-zgmFZ4YIJ3ocW=s88-c-k-c0x00ffffff-no-rj-mo" alt="Rafael Marques"  className="thumb" />
                </div>
              </div>
          </div>
      </Topo>
      <Drop open={drop}>
        <div className="content">
          <a href="https://">
            Change to teacher mode
            <span className="material-icons-outlined">east</span>
          </a>
        </div>
      </Drop>
      </>
  );
}

export default Header;