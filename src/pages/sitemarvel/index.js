import './index.scss';

export default function Marvel() {
  return (
    <div className="body">
      <div className='cabecalho'>
        
       <div className='img'>
          <img src='/assets/images/image 14.png'/>
        </div> 
        
        <div className='direita'>
          <p>Home</p>
          <p>Personagens</p>
          <p>Quadrinhos</p>
          <p>Eventos</p>
          <p>Contato</p>

          <img src='/assets/images/Rectangle 68.png'/>

        </div>

      </div>

      <div className='centro'>
        
        <div className='card'>
          
          <div className='esq'>
            <p>Personagens da Marvel</p>
          </div>
          
          <div className='direi'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>
            <img src='/assets/images/Union.svg'/>
            <input></input>
          </div>
        
        </div>
      
      </div>

    </div>
  );
}
