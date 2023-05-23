import FirstName from './FirstName';
import LastName from './LastName';
import './user.css'

const User = () => {

   return ( 
      <section>
      <h2>Redux Toolkit State Change </h2>

      <div className="inputGrup">
         <input placeholder="First Name"/>
         <input placeholder="Last Name"/>
      </div>
      <div className="textOutput">
         <FirstName/>
        <LastName/>
      </div>
      
      </section>
   )
}

export default User;