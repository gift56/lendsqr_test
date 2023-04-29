import {
  DecisionIcon,
  GuarntorIcon,
  KarmaIcon,
  LoanIcon,
  RequestIcon,
  SavingsIcon,
  UsersIcon,
  WaitliastIcon,
} from "../assets";

export const customersLink = [
  {
    to: "/dashboard/users",
    img: UsersIcon,
    text: "Users",
  },
  {
    to: "/dashboard/guarntors",
    img: GuarntorIcon,
    text: "Guarantors",
  },
  {
    to: "/dashboard/loans",
    img: LoanIcon,
    text: "Loans",
  },
  {
    to: "/dashboard/decision-models",
    img: DecisionIcon,
    text: "Decision Models",
  },
  {
    to: "/dashboard/savings",
    img: SavingsIcon,
    text: "Savings",
  },
  {
    to: "/dashboard/request-loan",
    img: RequestIcon,
    text: "Loan Requests",
  },
  {
    to: "/dashboard/whitelist",
    img: WaitliastIcon,
    text: "Whitelist",
  },
  {
    to: "/dashboard/karma",
    img: KarmaIcon,
    text: "Karma",
  },
];
