const Box = ({ children }) => {
    return ( 
        <div className="p-4 bg-white rounded-2xl border border-slate-400">
            { children }
        </div>
    );
}

export default Box;