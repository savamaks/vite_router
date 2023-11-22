import { useEffect, useState } from "react";
import { requestDisk } from "../requestApi/request";

const One = ({str}:any) => {
    const [data, setData] = useState<any>({});
    console.log(data);
    const downloadLink = async () => {
        
        const result = await requestDisk(str);
        setData(result);
    };

    useEffect(() => {
        downloadLink();
    }, []);
    return (
        <div>
            {data._embedded &&
                data._embedded.items.map((el: any, index: number) => {
                    return <img key={index} src={el.sizes[8].url} alt="" />;
                })}
        </div>
    );
};

export default One;
