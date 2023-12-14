import YourGoal from '../../components/SetParamsComponents/YourGoal/YourGoal';
import SelectGender from '../../components/SetParamsComponents/SelectGender/SelectGender';
import BodyParameters from '../../components/SetParamsComponents/BodyParameters/BodyParameters';
import YourActivity from '../../components/SetParamsComponents/YourActivity/YourActivity';

export default function SetParamsPage() {
  return (
    <>
      <h2>SetParamsPage</h2>
      <YourGoal />
      <SelectGender />
      <BodyParameters />
      <YourActivity />
    </>
  );
}
