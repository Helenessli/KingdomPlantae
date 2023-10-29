export { MachineHead, MachineBody };

function MachineHead({ direction }: { direction: number }) {
    let border = ["t", "b", "l", "r"][direction];
    let xy = (direction < 2) ? "x" : "y";
    return (<div className = 
        {`w-0 h-0 border-${xy}-[12.5px] border-${xy}-transparent 
        border-${border}-[25px] border-${border}-[#000000]`} 
    />);
}

function MachineBody() {
    return (<div className = {"w-[25px] h-[25px] bg-[#000000]"} />);
}