"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "./DatePikker";
import { toast } from "@/hooks/use-toast";
import { addRequest } from "@/actions/requests";

const formSchema = z.object({
  // name: z.string().min(2, "Name is required").max(50),
  bio: z.string().min(2).max(150, "Bio is too long"),
  hospital: z.string().min(2).max(90),
  fees: z.string(),
  // days: z.string().min(2).max(50),
  gender: z.enum(["Male", "Female", "Other"]),
  appointmentTime: z.string(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  // profileImg: z.string().url("Must be a valid URL"),
  number: z.string().min(10).max(15),
  // email: z.string().email("Invalid email format"),
  address: z.string(),
});

export default function DoctorForm({ session }) {

  const form = useForm({


    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      hospital: "",
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      address: "",
    },
  });

  async function onSubmit(values) {
    console.log("values---", values);
    values.user = session.user.id;
    console.log("values=>", values);
    const response = await addRequest(values);
    console.log("response=..", response);
    if (response.error) {
      form.reset();
      toast({
        title: "Sorry , Your application cannot be submitted.",
        description: response.msg,
      });
    } else {
      form.reset();
      toast({
        title: "Your application is submitted.",
        description: "You will be informed by email in 3 business days.",
      });
    }
  }
  return (
    <div className="flex items-center  w-full justify-center min-h-screen ">

      <Form  {...form}>
        <form 
          onSubmit={ form.handleSubmit(onSubmit)}
          className="w-full max-sm:w-full py-4 mx-auto mt-10 border p-6 bg-white rounded-lg shadow-lg"
        >

          <div className=" grid grid-cols-2 gap-6 ">

            <div className=" flex flex-col gap-5">
              {/* <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Name</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Bio</b></FormLabel>
                    <FormControl>
                      <Textarea placeholder="Short bio" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hospital"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Hospital</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Associated hospital" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Consultation Fees</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Enter fees" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Gender</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Gender (Male, Female, Other)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="appointmentTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Appointment Time</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Available times (e.g., 9 AM - 5 PM)" {...field} />
                  
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Date</b></FormLabel>
                    <FormControl>
                    <DatePicker />

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <div className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Degree</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Doctor's degree" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specialization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Specialization</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Area of specialization" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Years of Experience</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Experience in years" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Contact Number</b></FormLabel>
                    <FormControl>
                      <Input placeholder="Phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />



              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><b>Address</b></FormLabel>
                    <FormControl>
                      <Textarea placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </div>


          <Button
            type="submit"
            className="w-full py-2 mt-8"
          >
            {form.formState.isSubmitting ? "Loading.." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
