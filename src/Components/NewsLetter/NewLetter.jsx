import './NewLetter.css'
const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Ofeers on your email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter