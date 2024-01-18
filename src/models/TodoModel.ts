class TodoModel{

    rowNumber: number;
    rowAssigned: string;
    rowDescription: string;

    constructor(rowNumber: number, rowAssigned: string, rowDescription: string){
        this.rowNumber = rowNumber;
        this.rowAssigned = rowAssigned;
        this.rowDescription = rowDescription;
    }
}