import { DiaryPillImg, MealParamsItemWrapper, DiaryPillsWrapper, HeaderOfPill, MealParamsItem, MealParamsItemData, MealParamsList, MealPillWrapper, PillElement, TypeOfMeal, MealPillItem, MealPillParamsList, MealPillParamsitem, NumberOfMeal, NameOfMeal, MealPillList, MealPillAddSvg, MealPillAddParagraph, MealPillAdd, MealPillEdit, MealPillEditSvg, MealPillEditText, MobileWrapper, MobileHeader, MealPillParamsitemText, MealPillParamsitemWrapper } from "./DiaryPills.styled"
import breakfastImage from '../../../assets/breakfast-image.svg';
import dinnerImage from '../../../assets/dinner-image.svg';
import lunchImage from '../../../assets/lunch-image.svg';
import snackImage from '../../../assets/snack-image.svg';
import icons from './../../../assets/icons.svg';


// c этого -----------------------------------------------

import axios from 'axios';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../../redux/operations';
import { useDispatch } from "react-redux";

export const DiaryPills = () => {

    axios.defaults.baseURL = 'https://healthy-hub-rest-api.onrender.com/api';
    const [dataOfUser, setDataOfUser] = useState([]); 
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
            const data = await dispatch(getCurrentUser());
                setDataOfUser(data.payload)
                console.log(data.payload)
            }
            catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, [])

//по сюда ------------------------------------------------

//логика получения данных пользователя, не теряй



/////////////////////////////////////////////////////////



// отсюда ----------------------------------------------

// const dataCap = numberOfDay => {
//     if (dataOfUser.length !== 0) {
//         console.log(dataOfUser)
//         const foundItem = dataOfUser.weightPerDay.find(el => numberOfDay === el.day.toString());
//         if (foundItem) {
//             return foundItem.weight;
//         } else {
//             return 0;
//         }
//     }
//     return 0;
// }
    
// до сюда ---------------------------------------------
  
//логика получения данных по дням


// const mealParamsList = () => {
//     return (
//         <MealParamsList>
//             <MealParamsItem>Carbonohidrates:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//             <MealParamsItem>Protein:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//             <MealParamsItem>Fat:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//         </MealParamsList>
//     )
// }

// "breakfast": {
//       "totalCarbohydrates": 100,
//       "totalProtein": 10,
//       "totalFat": 5,
//       "totalCalories": 115,
//       "foods": {
//         "_id": "65823b3c2549fd125ae2a0fa",
//         "name": "banana",
//         "nutrition": {
//           "carbohydrates": 100,
//           "protein": 10,
//           "fat": 5
//         },
//         "calories": 115
//       }
//     }
    
const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 834);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 834);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);    
    
const pillFoodList = () => {
    const breakfast = () => {
        // const breakfastFoodList = () => {
        //     <ul>{
        //         dataOfUser.map(el => {
        //             return (
        //                 <li key={}>
        //                     <div>1</div>
        //                     <div>English breakfast</div>
        //                     <ul>
        //                         <li>77.1</li>
        //                         <li>77.1</li>
        //                         <li>77.1</li>
        //                     </ul>    
        //                 </li>
        //             )
        //         })}        
        //     </ul>
        // }
        return (
            <li>
                
            </li>
        )
    }
    return(
        <ul>
            {breakfast()}
        </ul>
    )
}
    return (
        <DiaryPillsWrapper>
            <PillElement>
                <HeaderOfPill>
                    {/* <MobileHeader> */}
                        <DiaryPillImg src={breakfastImage} alt="Plate" />
                        <TypeOfMeal>Breakfast</TypeOfMeal>
                    {/* </MobileHeader> */}
                    <MealParamsList>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Carbonohidrates:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Protein:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Fat:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                    </MealParamsList>
                </HeaderOfPill>
                <MealPillWrapper>
                    <MealPillList>
                        <MealPillItem>
                            <NumberOfMeal>1</NumberOfMeal>
                            {isSmallScreen ?
                                <MobileWrapper>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Carb.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Prot.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Fat.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                    </MealPillParamsList>
                                </MobileWrapper>
                                :
                                <>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    </MealPillParamsList>
                                </>
                            }
                        
                            <MealPillEdit>
                                <MealPillEditSvg>
                                    <use href={`${icons}#icon-edit`}></use>
                                </MealPillEditSvg>
                                <MealPillEditText>
                                    Edit
                                </MealPillEditText>
                            </MealPillEdit>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>2</NumberOfMeal>
                            <MealPillAdd>
                                <MealPillAddSvg>
                                    <use href={`${icons}#icon-add`}></use>
                                </MealPillAddSvg>
                                <MealPillAddParagraph>Record your meal</MealPillAddParagraph>
                            </MealPillAdd>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>3</NumberOfMeal>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>4</NumberOfMeal>
                        </MealPillItem>
                    </MealPillList>
                </MealPillWrapper>
            </PillElement>
            <PillElement>
                <HeaderOfPill>
                    {/* <MobileHeader> */}
                        <DiaryPillImg src={breakfastImage} alt="Plate" />
                        <TypeOfMeal>Breakfast</TypeOfMeal>
                    {/* </MobileHeader> */}
                    <MealParamsList>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Carbonohidrates:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Protein:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Fat:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                    </MealParamsList>
                </HeaderOfPill>
                <MealPillWrapper>
                    <MealPillList>
                        <MealPillItem>
                            <NumberOfMeal>1</NumberOfMeal>
                            {isSmallScreen ?
                                <MobileWrapper>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Carb.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Prot.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Fat.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                    </MealPillParamsList>
                                </MobileWrapper>
                                :
                                <>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    </MealPillParamsList>
                                </>
                            }
                        
                            <MealPillEdit>
                                <MealPillEditSvg>
                                    <use href={`${icons}#icon-edit`}></use>
                                </MealPillEditSvg>
                                <MealPillEditText>
                                    Edit
                                </MealPillEditText>
                            </MealPillEdit>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>2</NumberOfMeal>
                            <MealPillAdd>
                                <MealPillAddSvg>
                                    <use href={`${icons}#icon-add`}></use>
                                </MealPillAddSvg>
                                <MealPillAddParagraph>Record your meal</MealPillAddParagraph>
                            </MealPillAdd>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>3</NumberOfMeal>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>4</NumberOfMeal>
                        </MealPillItem>
                    </MealPillList>
                </MealPillWrapper>
            </PillElement>
            <PillElement>
                <HeaderOfPill>
                    {/* <MobileHeader> */}
                        <DiaryPillImg src={breakfastImage} alt="Plate" />
                        <TypeOfMeal>Breakfast</TypeOfMeal>
                    {/* </MobileHeader> */}
                    <MealParamsList>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Carbonohidrates:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Protein:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Fat:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                    </MealParamsList>
                </HeaderOfPill>
                <MealPillWrapper>
                    <MealPillList>
                        <MealPillItem>
                            <NumberOfMeal>1</NumberOfMeal>
                            {isSmallScreen ?
                                <MobileWrapper>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Carb.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Prot.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Fat.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                    </MealPillParamsList>
                                </MobileWrapper>
                                :
                                <>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    </MealPillParamsList>
                                </>
                            }
                        
                            <MealPillEdit>
                                <MealPillEditSvg>
                                    <use href={`${icons}#icon-edit`}></use>
                                </MealPillEditSvg>
                                <MealPillEditText>
                                    Edit
                                </MealPillEditText>
                            </MealPillEdit>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>2</NumberOfMeal>
                            <MealPillAdd>
                                <MealPillAddSvg>
                                    <use href={`${icons}#icon-add`}></use>
                                </MealPillAddSvg>
                                <MealPillAddParagraph>Record your meal</MealPillAddParagraph>
                            </MealPillAdd>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>3</NumberOfMeal>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>4</NumberOfMeal>
                        </MealPillItem>
                    </MealPillList>
                </MealPillWrapper>
            </PillElement>
            <PillElement>
                <HeaderOfPill>
                    {/* <MobileHeader> */}
                        <DiaryPillImg src={breakfastImage} alt="Plate" />
                        <TypeOfMeal>Breakfast</TypeOfMeal>
                    {/* </MobileHeader> */}
                    <MealParamsList>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Carbonohidrates:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Protein:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                        <MealParamsItemWrapper>
                            <MealParamsItem>Fat:</MealParamsItem><MealParamsItemData>{77.1}</MealParamsItemData>
                        </MealParamsItemWrapper>
                    </MealParamsList>
                </HeaderOfPill>
                <MealPillWrapper>
                    <MealPillList>
                        <MealPillItem>
                            <NumberOfMeal>1</NumberOfMeal>
                            {isSmallScreen ?
                                <MobileWrapper>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Carb.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Prot.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                        <MealPillParamsitemWrapper>
                                            <MealPillParamsitemText>Fat.</MealPillParamsitemText><MealPillParamsitem>66.1</MealPillParamsitem>
                                        </MealPillParamsitemWrapper>
                                    </MealPillParamsList>
                                </MobileWrapper>
                                :
                                <>
                                    <NameOfMeal>English breakfast</NameOfMeal>
                                    <MealPillParamsList>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    <MealPillParamsitem>77.1</MealPillParamsitem>
                                    </MealPillParamsList>
                                </>
                            }
                        
                            <MealPillEdit>
                                <MealPillEditSvg>
                                    <use href={`${icons}#icon-edit`}></use>
                                </MealPillEditSvg>
                                <MealPillEditText>
                                    Edit
                                </MealPillEditText>
                            </MealPillEdit>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>2</NumberOfMeal>
                            <MealPillAdd>
                                <MealPillAddSvg>
                                    <use href={`${icons}#icon-add`}></use>
                                </MealPillAddSvg>
                                <MealPillAddParagraph>Record your meal</MealPillAddParagraph>
                            </MealPillAdd>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>3</NumberOfMeal>
                        </MealPillItem>
                        <MealPillItem>
                            <NumberOfMeal>4</NumberOfMeal>
                        </MealPillItem>
                    </MealPillList>
                </MealPillWrapper>
            </PillElement>
        </DiaryPillsWrapper>
    )
}


// <div>
//     <TypeOfMeal>Lunch</TypeOfMeal>
//     <MealParamsWrapper>
//         <MealParamsList>
//             <MealParamsItem>Carbonohidrates:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>   
//             <MealParamsItem>Protein:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//             <MealParamsItem>Fat:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//         </MealParamsList>
//     </MealParamsWrapper>
//     <MealPillWrapper>
//         <ul>
//             <li>
//                 <div>1</div>
//                 <div>English Lunch</div>
//                 <ul>
//                     <li>77.1</li>
//                     <li>77.1</li>
//                     <li>77.1</li>
//                 </ul>    
//             </li>
//             <li><div>2</div></li>
//             <li><div>3</div></li>
//             <li><div>4</div></li>
//         </ul>
//     </MealPillWrapper>
// </div>

// <div>
//     <TypeOfMeal>Dinner</TypeOfMeal>
//     <MealParamsWrapper>
//         <MealParamsList>
//             <MealParamsItem>Carbonohidrates:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>   
//             <MealParamsItem>Protein:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//             <MealParamsItem>Fat:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//         </MealParamsList>
//     </MealParamsWrapper>
//     <MealPillWrapper>
//         <ul>
//             <li>
//                 <div>1</div>
//                 <div>English Dinner</div>
//                 <ul>
//                     <li>77.1</li>
//                     <li>77.1</li>
//                     <li>77.1</li>
//                 </ul>    
//             </li>
//             <li><div>2</div></li>
//             <li><div>3</div></li>
//             <li><div>4</div></li>
//         </ul>
//     </MealPillWrapper>
// </div>            

// <div>
//     <TypeOfMeal>Snack</TypeOfMeal>
//     <MealParamsWrapper>
//         <MealParamsList>
//             <MealParamsItem>Carbonohidrates:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>   
//             <MealParamsItem>Protein:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//             <MealParamsItem>Fat:<MealParamsItemData>{77.1}</MealParamsItemData></MealParamsItem>
//         </MealParamsList>
//     </MealParamsWrapper>
//     <MealPillWrapper>
//         <ul>
//             <li>
//                 <div>1</div>
//                 <div>English Snack</div>
//                 <ul>
//                     <li>77.1</li>
//                     <li>77.1</li>
//                     <li>77.1</li>
//                 </ul>    
//             </li>
//             <li><div>2</div></li>
//             <li><div>3</div></li>
//             <li><div>4</div></li>
//         </ul>
//     </MealPillWrapper>
// </div> 