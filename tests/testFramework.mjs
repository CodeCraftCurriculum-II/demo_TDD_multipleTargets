export function test(evaluation, description) {
  try {
    if (evaluation()) {
      // Må det være sant
      console.log(`🟢 Test:  ${description}`);
    } else {
      console.log(`🔴 Test: ${description}`);
    }
  } catch (error) {
    console.log(`🔴 Test: ${description}`);
  }
}
