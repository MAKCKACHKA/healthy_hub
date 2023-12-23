import { DiaryPills } from "../../components/DiaryComponents/DiaryPills/DiaryPills";
import { GoBackToMainPage } from "../../components/DiaryComponents/GoBackToMainPage/GoBackToMainPage";

export default function DiaryPage() {
  return (
    <div>
      <GoBackToMainPage/>
      <DiaryPills/>
    </div>
  );
}
