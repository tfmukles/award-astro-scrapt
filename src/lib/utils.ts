import { Contributor } from "@/app/type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GroupedContributors {
  [date: string]: Contributor[];
}

export function groupByDate(data: Contributor[]): GroupedContributors {
  return data.reduce((acc: GroupedContributors, item: Contributor) => {
    const date = item.date.trim();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});
}
