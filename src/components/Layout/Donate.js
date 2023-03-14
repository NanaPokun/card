import { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted donation:', amount);
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Process donation using amount value here
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleDonateClick = () => {
    setIsSubmitting(true);
  };

  const handleAlertOk = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted && (
        <div className="relative top-20 p-4 bg-white rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-bold mb-4 text-center">Donate</h2>
          <form
            onSubmit={handleSubmit}
            className={`transition-all ${
              isSubmitting ? 'translate-y-1/2 opacity-75' : 'translate-y-0 opacity-100'
            }`}
          >
            <label className="block mb-2" htmlFor="amount-input">
              Enter amout here
            </label>
            <input
              className="w-full border rounded py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="amount-input"
              min="0"
              step="0.01"
              value={amount}
              onChange={handleAmountChange}
            />
            <button type="submit"
                className={`bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isSubmitting ? 'hidden' : 'block'
                }`}
                onClick={handleDonateClick}
            >
              Send
            </button>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div className="relative top-20 p-4 bg-white rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-bold mb-4">Thank you for donating!</h2>
          <button
            className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAlertOk}
          >
            OK
          </button>
        </div>
      )}
    </>
  );
};

export default Donate;
