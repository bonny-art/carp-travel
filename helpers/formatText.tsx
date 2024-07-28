export const formatSlideName = (text: string) => {
  if (text === "Hot air ballooning") {
    return (
      <>
        Hot air
        <br />
        ballooning
      </>
    );
  }
  return text;
};
