export function calcStartTime(startDate: string): number {
  const nowInSec = new Date().getTime() / 1000;
  const startTimeInSec = new Date(startDate).getTime() / 1000;
  return startTimeInSec - nowInSec;
}

export function calcEndTime(endDate: string): number {
  const nowInSec = new Date().getTime() / 1000;
  const endTimeInSec = new Date(endDate).getTime() / 1000;
  return endTimeInSec - nowInSec;
}

export function calcProps(startTime: number, endTime: number, isEnglish: boolean) {
  const texts = {
    eventEnded: isEnglish ? 'Event has ended' : 'Wydarzenie zakończone',
    eventStart: isEnglish ? 'Event starts in' : 'Start wydarzenia',
    eventEnd: isEnglish ? 'Event ends in' : 'Koniec wydarzenia za',
  };

  let time: null | number = null;
  let header = texts.eventEnded;

  if (startTime > 0) {
    return { time: startTime, header: texts.eventStart };
  }

  if (startTime < 0 && endTime > 0) {
    return { time: endTime, header: texts.eventEnd };
  }

  return { time, header };
}
