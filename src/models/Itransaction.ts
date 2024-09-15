import { IBook } from "./Ibook";
import { ILibraryMember } from "./Ilibrary_member";
import { IPenalty } from "./IPenalty";
import { IStaffUser } from "./Istaff_user";

export interface ITransaction{
  staff: IStaffUser,
  member: ILibraryMember,
  status: string,
  penalties: IPenalty[],
  date_returned?: string,
  date: string,
  books: IBook[],
}
