type DisplayData = number[][];
type MachineData = number[][];

export default function machine(
    machineData: MachineData,
    displayData: DisplayData
) {
    return [ machineData, displayData ];
}