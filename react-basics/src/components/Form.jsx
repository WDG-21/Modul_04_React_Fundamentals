function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('the form was submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>FORM</h2>
      <label htmlFor='text'>Text:</label>
      <input id='text' onChange={(e) => console.log(e.target.value)} />
      <input id='text' onChange={(e) => console.log(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  );
}

export default Form;
