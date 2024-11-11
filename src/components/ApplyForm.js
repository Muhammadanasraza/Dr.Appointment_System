// components/DoctorForm.js
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadImg from "./UploadImg";
import { DatePicker } from "./DatePikker";

const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(50),
  bio: z.string().min(2).max(150, "Bio is too long"),
  hospital: z.string().min(2).max(90),
  fees: z.string(),
  days: z.string().min(2).max(50),
  gender: z.enum(["Male", "Female", "Other"]),
  appointmentTime: z.string(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  profileImg: z.string().url("Must be a valid URL"),
  number: z.string().min(10).max(15),
  email: z.string().email("Invalid email format"),
  address: z.string(),
});

export default function DoctorForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      fees: "",
      days: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
      profileImg: "",
      number: "",
      email: "",
      address: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="flex items-center  w-full justify-center min-h-screen ">

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-sm:w-full py-4 mx-auto mt-10 border p-6 bg-white rounded-lg shadow-lg"
        >

          <div className=" grid grid-cols-2 gap-6 space-y-3">

          <div className=" flex flex-col gap-5">
          <FormField
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
          />
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
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel><b>Available Days</b></FormLabel>
                <FormControl>
                  <Input placeholder="Available days (e.g., Mon-Fri)" {...field} />
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
                  {/* <Input placeholder="Available times (e.g., 9 AM - 5 PM)" {...field} />
                   */}
                   <DatePicker/>
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel><b>Email</b></FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
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
                {/* <FormControl>
                  <Input placeholder="Office address" {...field} />
                </FormControl> */}
                <FormControl>
                  <Textarea placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel ><b>UploadImg</b></FormLabel>
                <UploadImg />
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
            <b> Submit</b>
          </Button>
        </form>
      </Form>
    </div>
  );
}
