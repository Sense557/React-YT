function Hello () {

  let myName = "Shakti";
  let fullName = () => {
    return "Shakti Meher";
  }

  let number = 456;

  return (
    <p>Message:{number} I am {myName} and my full name is {fullName()} </p>
  );
}

export default Hello;
