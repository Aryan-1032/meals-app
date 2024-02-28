'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export default async function shareMeal(formData){

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator_email:formData.get('email'),
        creator:formData.get('name'),
        image:formData.get('image')
    }

    await saveMeal(meal);

    redirect('/meals')

}