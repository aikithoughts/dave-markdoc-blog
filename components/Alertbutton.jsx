const Alertbutton= ({ children }) => {
    return <button className="alertbutton" onClick={() => alert("Thanks for clicking!")}>{children}</button>;
};
export default Alertbutton;