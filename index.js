function chronify(dateInput, options = {}) {
  const { maxUnits = 2, short = false } = options;
  const now = new Date();

  if (!dateInput || isNaN(new Date(dateInput).getTime())) {
    throw new Error("Invalid date input");
  }

  const past = now > dateInput;
  const diffInSeconds = Math.abs(now - new Date(dateInput)) / 1000;

  const yearDiff = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));
  const monthDiff = Math.floor(
    (diffInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60)
  );
  const dayDiff = Math.floor(
    (diffInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60)
  );
  const hourDiff = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minuteDiff = Math.floor((diffInSeconds % (60 * 60)) / 60);

  const units = [
    { label: "year", value: yearDiff, short: "y" },
    { label: "month", value: monthDiff, short: "mo" },
    { label: "day", value: dayDiff, short: "d" },
    { label: "hour", value: hourDiff, short: "h" },
    { label: "minute", value: minuteDiff, short: "m" },
  ];

  const nonZeroUnits = units.filter(({ value }) => value > 0);
  const displayedUnits = nonZeroUnits.slice(0, maxUnits);

  let result = displayedUnits
    .map(({ label, value, short: shortUnit }) => {
      const unitLabel = short ? shortUnit : value === 1 ? label : `${label}s`;
      return `${value}${short ? "" : " "}${unitLabel}`;
    })
    .join(short ? " " : " ");

  const suffix = past ? "ago" : "from now";
  return result ? `${result} ${suffix}`.trim() : "just now";
}

module.exports = { chronify };
