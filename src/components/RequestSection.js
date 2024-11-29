"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { updateRequest } from "@/actions/requests";
import DoctorCard from "./DoctorCard";
import { useSearchParams, usePathname, useRouter  } from 'next/navigation';




export default function DoctorRequests({ requests, status }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState({
    type: null,
    requestId: null,
  });
  const [activeFilter, setActiveFilter] = useState(status || "all");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const countRequestsByStatus = (status) => {
    return requests.filter(request => status === 'all' || request.status === status).length;
  }

  const handleAction = (type, requestId) => {
    setSelectedAction({ type, requestId });
    setDialogOpen(true);
  };

  const confirmAction = async () => {
    if (selectedAction.type === "accept") {
      await updateRequest(selectedAction.requestId, "accepted");
    } else if (selectedAction.type === "reject") {
      await updateRequest(selectedAction.requestId, "rejected");
    }
    setDialogOpen(false);
  };

  const filteredRequests = requests.filter(
    (request) => activeFilter === "all" || request.status === activeFilter
  );


  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (activeFilter) {
      params.set('query', activeFilter);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

    console.log("Params",params)
  }, [activeFilter])



  const renderRequestCard = (request) => (
    <DoctorCard
      key={request._id}
      request={request}
      isAdmin={true}
      onAccept={() => handleAction("accept", request._id)}
      onReject={() => handleAction("reject", request._id)}
    />
  );

  return (
    <>
      <div className="grid  w-full gap-4 md:w-1/2 mx-auto grid-cols-4">
        {["all", "pending", "accepted", "rejected"].map((filter) => (
          <div
            key={filter}
            className={`border-secondary   font-sans cursor-pointer  my-4 text-center border  shadow rounded ${activeFilter === filter ? "bg-primary text-white" : ""
              }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} ({countRequestsByStatus(filter)})
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredRequests.map(renderRequestCard)}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to {selectedAction.type} this doctor
              request?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmAction}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

