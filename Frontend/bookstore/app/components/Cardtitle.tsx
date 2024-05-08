interface Props {
    title: string;
    price: number;
}

export const CardTitle = ({title, price}: Props) => {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "space-between",
        }}>

            <p className="card-title"> {title} </p>
            <p className="card-price"> {price} </p>
        </div>
    )
}