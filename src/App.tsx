import {useAddPetMutation, useGetPetByIdQuery} from "./app/api/enhancedApi";
import {Pet} from "./swagger/api/pet";

// фейк объект для создания домашнего животного
const cat: Pet = { id: 2, name: "Cat", photoUrls: ["string[]"],  status: "available" }

function App() {
  // Хук метода создания питомца - addPet
  // addPet - функция-триггер ручки
  // isLoading, isError, isSuccess и т.д флаги процесса запроса
  const [addPet, { isLoading: isLoadingAddPet }] = useAddPetMutation()
  // Хук метода на получение питомца по id - getPetById
  const {data, isFetching: isFetchingGetPet} = useGetPetByIdQuery({ petId: 2 })

  const handleСlickAdd = () => {
    // вызов метода на созадние питомца cat
    // Обычный промис, может быть обернут в try catch
    addPet({ pet: cat })
  }

  return (
    <div className="App">
      <button onClick={handleСlickAdd}>{isLoadingAddPet ? "Loading" : "Add"}</button>
      <pre>{isFetchingGetPet ? "Loading" : JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
