
export const UserLoansHandler = async (
    loanId: string, 
    userId: string, 
    bank: string,
    title: string,
    amount: number,
    months: number,
    interest: number,
    description: string,
    ) => {
    try {
      const response = await fetch('/api/userLoans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            loanId: loanId,
            userId: userId,
            fav: false,
            deleted: false,
            bank: bank,
            title: title,
            amount: amount,
            interest: interest,
            months: months,
            description: description
        }),
      });

      if (response.ok) {
       
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network or other errors
    }
  };
