import { useState } from "react";

const Interruptor = () => {

    const [luz, setLuz] = useState(false);

    function acender() {
        setLuz(luz ? (false) : (true))
    }


    return (
        <div className="flex flex-col justify-center items-center p-4">
            <button onClick={acender} className="bg-black text-white rounded px-2 cursor-pointer trasit">Interruptor</button>
            {
                luz ? (
                    <img src="https://png.pngtree.com/png-vector/20241124/ourmid/pngtree-illuminated-lightbulb-icon-representing-ideas-and-creativity-png-image_14551183.png" alt=""
                        className="w-100 "
                    />
                ) : (
                    <img src="https://png.pngtree.com/png-clipart/20240328/original/pngtree-light-bulb-turn-off-to-save-electrical-png-image_14702780.png" alt=""
                        className="w-100 "
                    />
                )
            }
        </div>
    );
}

export default Interruptor;