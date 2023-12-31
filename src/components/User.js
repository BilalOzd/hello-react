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
            {isLogin ? `Benim adım ${name}, soyadım ${surname}` : null}

            {address.title} {address.zip}


        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number,
    address: propTypes.shape()({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

export default User