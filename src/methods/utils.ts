import store from "@/store/index";
import moment from "moment";

type DateTime = {
  date: string;
  time: string;
};

export const getDateTime = ({ date, time }: DateTime) => {
  const { dateFormat, timeFormat } = store.state;
  const formattedDate = moment(date).format(dateFormat);
  const formattedTime = time
    ? moment(`${date} ${time}`).format(timeFormat)
    : "";
  return `${formattedDate} ${formattedTime}`;
};
