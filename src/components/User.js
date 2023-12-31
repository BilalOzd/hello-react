import PropTypes from "prop-types"

function User({name, surname, age, isLogin, address, friends}){

    if(!isLogin){
        return(
            <div>
               Giriş Yapmadınız... 
            </div>
        )
    }

    return(
        <div>
            
            <h1>{`Benim adım ${name}, soyadım ${surname}`}</h1>
            <br></br>

            {address.title} {address.zip}
            <br></br>
            <br></br>

            {friends && 
            friends.map((friend) => 
               <div key = {friend.id}> {friend.name} </div>
            )}
            <br></br>

        </div>
    )
}

//PropTypes class ensures that each prop you give has a data type and other features like 'isRequired'
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number,
    isLogin: PropTypes.bool.isRequired,
    address: PropTypes.shape({
        title: PropTypes.string.isRequired,
        zip: PropTypes.number
    }),
    friends: PropTypes.array
}

export default User