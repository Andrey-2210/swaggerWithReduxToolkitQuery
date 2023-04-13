import {petApi} from "../../swagger/api/pet";

// Расширение методов сгенерированых сваггером (если нужно)

const enhancedApi = petApi.enhanceEndpoints<"Pet">({
    addTagTypes: ["Pet"],
    endpoints: {
        getPetById: {
            providesTags: ["Pet"],
        },
        addPet: {
            invalidatesTags: ["Pet"],
        },
    },
})

export const {
    useGetPetByIdQuery,
    useAddPetMutation
} = enhancedApi;
