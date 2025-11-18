import React from "react";
import { TabsContent } from "../ui/tabs";
import { Switch } from "../ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "../ui/scroll-area";

const sizeData = [
  { usMen: "-", usWomen: "5", usBigKids: "3.5Y", uk: "2.5", eu: "34.5", jp: "21.5", footLength: "8.5" },
  { usMen: "-", usWomen: "5.5", usBigKids: "4Y", uk: "3", eu: "35", jp: "22", footLength: "8.7" },
  { usMen: "-", usWomen: "6", usBigKids: "4.5Y", uk: "3.5", eu: "36", jp: "22.5", footLength: "8.9" },
  { usMen: "-", usWomen: "6.5", usBigKids: "5Y", uk: "4", eu: "36.5", jp: "23", footLength: "9.1" },
  { usMen: "-", usWomen: "7", usBigKids: "5.5Y", uk: "4.5", eu: "37", jp: "23.5", footLength: "9.3" },
  { usMen: "-", usWomen: "7.5", usBigKids: "6Y", uk: "5", eu: "38", jp: "24", footLength: "9.4" },
  { usMen: "6.5", usWomen: "8", usBigKids: "6.5Y", uk: "5.5", eu: "38.5", jp: "24.5", footLength: "9.6" },
  { usMen: "7", usWomen: "8.5", usBigKids: "7Y", uk: "6", eu: "39", jp: "25", footLength: "9.8" },
  { usMen: "7.5", usWomen: "9", usBigKids: "-", uk: "6.5", eu: "40", jp: "25.5", footLength: "10.0" },
  { usMen: "8", usWomen: "9.5", usBigKids: "-", uk: "7", eu: "40.5", jp: "26", footLength: "10.2" },
  { usMen: "8.5", usWomen: "10", usBigKids: "-", uk: "7.5", eu: "41", jp: "26.5", footLength: "10.4" },
  { usMen: "9", usWomen: "10.5", usBigKids: "-", uk: "8", eu: "42", jp: "27", footLength: "10.6" },
  { usMen: "9.5", usWomen: "11", usBigKids: "-", uk: "8.5", eu: "42.5", jp: "27.5", footLength: "10.8" },
  { usMen: "10", usWomen: "11.5", usBigKids: "-", uk: "9", eu: "43", jp: "28", footLength: "11.0" },
  { usMen: "10.5", usWomen: "-", usBigKids: "-", uk: "9.5", eu: "44", jp: "28.5", footLength: "11.2" },
  { usMen: "11", usWomen: "-", usBigKids: "-", uk: "10", eu: "44.5", jp: "29", footLength: "11.4" },
  { usMen: "11.5", usWomen: "-", usBigKids: "-", uk: "10.5", eu: "45", jp: "29.5", footLength: "11.6" },
  { usMen: "12", usWomen: "-", usBigKids: "-", uk: "11", eu: "46", jp: "30", footLength: "11.8" },
  { usMen: "13", usWomen: "-", usBigKids: "-", uk: "12", eu: "47", jp: "31", footLength: "12.2" },
  { usMen: "14", usWomen: "-", usBigKids: "-", uk: "13", eu: "48", jp: "32", footLength: "12.6" },
  { usMen: "15", usWomen: "-", usBigKids: "-", uk: "14", eu: "49", jp: "33", footLength: "13.0" },
  { usMen: "16", usWomen: "-", usBigKids: "-", uk: "15", eu: "50", jp: "34", footLength: "13.4" },
];

function TabChart({ value }) {
  const [isMetric, setIsMetric] = React.useState(false);

  return (
    <TabsContent value={value} className="">

        <div className="flex items-center justify-end gap-2 mb-4">
          <span className="text-sm">in</span>
          <Switch checked={isMetric} onCheckedChange={setIsMetric} />
          <span className="text-sm">cm</span>
        </div>
        <div className="border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className='bg-muted/50'>
                <TableHead className="text-center font-semibold">US Men</TableHead>
                <TableHead className="text-center font-semibold">US Women</TableHead>
                <TableHead className="text-center font-semibold">US Big Kids</TableHead>
                <TableHead className="text-center font-semibold">UK</TableHead>
                <TableHead className="text-center font-semibold">EU</TableHead>
                <TableHead className="text-center font-semibold">JP</TableHead>
                <TableHead className="text-center font-semibold">Foot Length</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sizeData.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/30">
                  <TableCell className="text-center">{row.usMen}</TableCell>
                  <TableCell className="text-center">{row.usWomen}</TableCell>
                  <TableCell className="text-center">{row.usBigKids}</TableCell>
                  <TableCell className="text-center">{row.uk}</TableCell>
                  <TableCell className="text-center">{row.eu}</TableCell>
                  <TableCell className="text-center">{row.jp}</TableCell>
                  <TableCell className="text-center">
                    {isMetric
                      ? (parseFloat(row.footLength) * 2.54).toFixed(1)
                      : row.footLength
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className=" mt-2 flex flex-col gap-2 border-b pb-2">
          <h1>Doesn't fit?</h1>
          <p className="text-sm text-muted-foreground">
            At Vans, our goal is simple: We want you to feel as confident in your order as we do in our product. And you can, because we stand behind every product we make. You may return merchandise purchased online for size, fit or style reasons within 30 days of shipment of your order, provided it has not been damaged, washed, altered or worn. For more information, please visit our Customer Service page.
          </p>
        </div>

    </TabsContent>
  );
}

export default TabChart;
