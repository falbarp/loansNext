export interface LoanResponse {

}
export interface Loan {
    _id:         string;
    bank:        string;
    title:       string;
    valid:       boolean;
    amount:      number;
    months:      number;
    interest:    number;
    description: string;
}
