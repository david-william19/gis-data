import type { Device } from "../../models/device";
import "./table.css";

export default function TableDevices({ data }: { data: Device[] }) {
  return (
    <div className="table-container">
      <table border={1}>
        <thead>
          <tr>
            <th>Operator</th>
            <th>RSRQ</th>
            <th>Lat/Lng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.operator}</td>
              <td>{data.rsrq}</td>
              <td>
                {data.lat} / {data.lng}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
