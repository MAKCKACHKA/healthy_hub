import { IconWrapper } from './SettingsPage.styled';
import Illustration from '../../assets/pageIllustrations.svg';
import { useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');

  const handleCancel = () => {
    setName('');
    setPhoto(null);
    setAge('');
    setGender('');
    setHeight('');
    setWeight('');
    setActivity('');
  };
  const handleSave = () => {
    console.log('Form data saved:', {
      name,
      photo,
      age,
      gender,
      height,
      weight,
      activity,
    });
  };

  return (
    <div>
      <div>
        <div>
          <h2>Profile setting</h2>
          <div>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
        <IconWrapper>
          <use href={`${Illustration}#icon-settings`} />
        </IconWrapper>
      </div>
      <form>
        <div>
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="photo">Your photo:</label>
          {photo && <img src={photo} alt="Selected" />}

          <input
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
            onChange={(e) => {
              const file = e.target.files[0];
              const imageUrl = URL.createObjectURL(file);
              setPhoto(imageUrl);
            }}
          />
        </div>
        <div>
          <label htmlFor="age">Your age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Your activity:</label>
          <div>
            <input
              type="radio"
              id="activity1"
              name="activity"
              value="1.2"
              checked={activity === '1.2'}
              onChange={(e) => setActivity(e.target.value)}
            />
            <label htmlFor="activity1">
              1.2 - if you do not have physical activity and sedentary work
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="activity2"
              name="activity"
              value="1.375"
              checked={activity === '1.375'}
              onChange={(e) => setActivity(e.target.value)}
            />
            <label htmlFor="activity2">
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="activity3"
              name="activity"
              value="1.55"
              checked={activity === '1.55'}
              onChange={(e) => setActivity(e.target.value)}
            />
            <label htmlFor="activity3">
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="activity4"
              name="activity"
              value="1.725"
              checked={activity === '1.725'}
              onChange={(e) => setActivity(e.target.value)}
            />
            <label htmlFor="activity4">
              1.725 - if you train fully 6-7 times a week
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="activity5"
              name="activity"
              value="1.9"
              checked={activity === '1.9'}
              onChange={(e) => setActivity(e.target.value)}
            />
            <label htmlFor="activity5">
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
