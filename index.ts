// Import stylesheets
import './style.css';

function appendDatesToElement(
  startDate: Date,
  endDate: Date,
  excludedDays: string[],
  elementId: string
): void {
  const excludedSet = new Set(excludedDays);

  const currentDate = new Date(startDate);
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
    if (!excludedSet.has(dayOfWeek)) {
      const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      const listItem = document.createElement('li');
      listItem.textContent = `${dayOfWeek}, ${formattedDate}`;
      container.appendChild(listItem);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

const startDate = new Date('2023-06-01');
const endDate = new Date('2023-06-30');
const excludedDays = ['Saturday', 'Sunday'];

appendDatesToElement(startDate, endDate, excludedDays, 'dateList');