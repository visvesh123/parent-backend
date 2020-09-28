import React from "react";
import "antd/dist/antd.css";
import { Descriptions } from "antd";
import moment from "moment";
const Desc = (props) => {
  if (!props.items[0]) return null;
  const ele = props.items[0];

  function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log("calculated days", days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log("calculated hours", hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log("minutes", minutes);

    let difference = "";
    if (days > 0) {
      difference += days === 1 ? `${days} day, ` : `${days} days, `;
    }

    difference +=
      hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `;

    difference +=
      minutes === 0 || hours === 1
        ? `${minutes} minutes`
        : `${minutes} minutes`;

    return difference;
  }

  function getSafe(fn, defaultVal) {
    try {
      return fn();
    } catch (e) {
      return defaultVal;
    }
  }
  getSafe(() => ele.MOVING, "OUT");

  const duration =
    ele.MOVING === "IN"
      ? timeDiffCalc(
          new Date(props.items[0].DATE),
          new Date(props.items[1].DATE)
        )
      : "-";
  // const reason = ele.MOVING === "IN" ? "-" : ele.REMARKS;
  const reason = ele.REMARKS;
  // console.log(moment());
  return (
    <div>
      <Descriptions title="Description">
        {/* <Descriptions.Item label="Name"></Descriptions.Item> */}
        <Descriptions.Item
          label={ele.MOVING === "OUT" ? "Checked Out at" : "Checked In at"}
        >
          {moment(ele.DATE).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label="Duration of recent outing">
          {duration}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Reason">{reason} </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Desc;
