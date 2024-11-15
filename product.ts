// Task 4: Product Interface and Total Price Calculation
interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price,0);
}

// Example of Task4
const products: Product[] = [
    { name: "Apple", price: 2.5 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 3 }
];

console.log(calculateTotalPrice(products)); // 7.5

// Task 5: Validate Email Address
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example Task 5
console.log(isValidEmail("test@example.com")); // result true
console.log(isValidEmail("invalid-email")); // result false
