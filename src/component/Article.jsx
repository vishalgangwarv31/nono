const Article = (props) => {
    return (
        <>
            <div className="product-container">
                <h1 className="product-header">{props.heading}</h1>
                <p className="product-para">
                    {props.para.split('<br />').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span  >
                    ))}
                </p>
            </div>
        </>
    );
}


export default Article;

