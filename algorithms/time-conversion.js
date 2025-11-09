// https://www.hackerrank.com/challenges/time-conversion/problem

const expect = require("expect");

function timeConversion(s) {
  // Write your code here
  let [hour, minutes, rawEnd] = s.split(":");
  let seconds = rawEnd.substring(0, 2);
  let cycle = rawEnd.substring(2, 4).toUpperCase();

  const validFormat =
    Number.isFinite(Number(hour)) &&
    Number.isFinite(Number(minutes)) &&
    Number.isFinite(Number(seconds)) &&
    (cycle === "AM" || cycle === "PM");

  if (!validFormat) {
    return `Invalid format, expected 'hh:mm:ssAM or hh:mm:ssPM'`;
  }

  let militaryHour = "";
  if (cycle.toUpperCase() === "AM") {
    if (hour == 12) {
      militaryHour = "00";
    } else {
      militaryHour = hour;
    }
  } else {
    // PM
    if (hour == 12) {
      militaryHour = "12";
    } else {
      militaryHour = Number(hour) + 12;
    }
  }

  return `${militaryHour}:${minutes}:${seconds}`;
}

describe("Time from AM/PM to military", () => {
  it("should print the time in military", () => {
    expect(timeConversion("12:00:00AM")).toBe("00:00:00");
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  });
});
