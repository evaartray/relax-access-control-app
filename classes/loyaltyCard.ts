class LoyaltyCard implements Card {
    private static currentId = 2000;
    cardId: number;    
    private loyaltyPoints: number;   
    
    constructor(  
      private memberName: string,
      private rating: number,
      private credits: number   
          
    ) {
      this.memberName = memberName;
      this.rating = rating;
      this.credits = credits;            
      this.cardId = LoyaltyCard.currentId++;
      this.loyaltyPoints = 20;      
      
    }
    creditNumber(): number {
      throw new Error("Method not implemented.");
    }
  
   
    public getName = (): string => this.memberName;
  
    
    public getId = (): number => this.cardId;
  
   
    public changeRating = (rating: number): void => {
      this.rating = rating;
    };
  
  
    public getRating = (): number => this.rating;
  
  
    public addCredits = (credits: number): void => {
      this.credits += credits;
    };
   
    public useZone = (): void => {
      this.credits -= 4;
      this.loyaltyPoints += 2;
    };
  
   
    public getCredits = (): number => this.credits;
  
    
    public hasEnoughCredits = (): boolean => this.credits >= 4;
  
   
    public toString = (): string =>
      "***Member Card***" +
      "\nCard No: " +
      this.cardId +
      "\nName: " +
      this.memberName +
      "\nRating: " +
      this.rating +
      "\nCredits: " +
      this.credits +
      "\nLoyalty Points: " +
      this.loyaltyPoints +
      "\n";
  }
