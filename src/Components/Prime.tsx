import React, { useState } from "react";
import styles from "./Prime.module.css"; // Import the styles

// Prime checking function
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2, sqrtNum = Math.sqrt(num); i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to generate a random prime within a range determined by the number of digits
const generateRandomPrime = (digits: number): number => {
  const min = BigInt(Math.pow(10, digits - 1));
  const max = BigInt(Math.pow(10, digits)) - BigInt(1);
  let prime: bigint;
  do {
    prime =
      BigInt(Math.floor(Math.random() * (Number(max) - Number(min) + 1))) + min;
  } while (!isPrime(Number(prime)));
  return Number(prime);
};

// Prime component using const and arrow function
const Prime: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [prime, setPrime] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const maxDigits = 15;
    const digits = text.length > maxDigits ? maxDigits : text.length; // Limit digits to manage computation
    const generatedPrime = generateRandomPrime(digits);
    setPrime(generatedPrime);
  };

  return (
    <div className={styles.container}>
      {prime !== null && <p className={styles.primeNumber}>{prime}</p>}
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Your thought now..."
          />
          <button type="submit" className={styles.button}>
            Gen
          </button>
        </form>
      </div>
    </div>
  );
};

export default Prime;
