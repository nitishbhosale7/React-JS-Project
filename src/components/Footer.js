import '../index.css';

export default function Footer(props){
    var currTime = new Date().getHours();
    var openingTime = 10;
    var closingTime = 22;
    var greetingText = currTime >= openingTime && currTime <= closingTime ? 'We are open from 12:00 to 22:00.Come visit us or order online.' : 'We are currently closed';
    return(
        <footer className="footer">
            <div className="order">
            <p>{greetingText}</p>
            <button className="btn">Order</button>
            </div>
        </footer>
    )
}