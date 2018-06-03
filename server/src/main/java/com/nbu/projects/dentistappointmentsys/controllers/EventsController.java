package com.nbu.projects.dentistappointmentsys.controllers;


import org.springframework.web.bind.annotation.*;

@RestController
public class EventsController {
    /*@Autowired
    EventsRepository eventsRepository;

    @Autowired
    EventCommentRepository eventCommentRepository;

    @GetMapping("/events")
    public List<EventInfoModel> getEvents() {
        long time = System.currentTimeMillis();
        Timestamp now = new Timestamp(time);
        return eventsRepository.getActiveEvents(now);
    }

    @GetMapping("/events/{id}")
    public List<Event> getDentistEvents(@PathVariable(value="id") Long id) { return eventsRepository.getAllByDentistId(id); }

    @PostMapping("/addEvent")
    public Boolean addEvent(@RequestBody EventRequestModel eventModel) {
        Timestamp startTime = new Timestamp(0);
        Timestamp endTime = new Timestamp(0);
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
            Date startParsed = dateFormat.parse(eventModel.getStartTime());
            startTime = new Timestamp(startParsed.getTime());
            Date endParsed = dateFormat.parse(eventModel.getEndTime());
            endTime = new Timestamp(endParsed.getTime());
        } catch(Exception e) {
            //System.err.println(e);
        }

        Event event = new Event(eventModel.getDentistId(), eventModel.getTitle(), startTime , endTime, eventModel.getInfo());
        return eventsRepository.save(event) != null;
    }

    @GetMapping("/exists")
    public Boolean existsEvent(@RequestParam(value = "dentistId") Long dentistId,
                           @RequestParam(value = "date") String date) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Timestamp formattedDate = new Timestamp(0);
        try {
            Date dateParsed = format.parse(date);
            formattedDate = new Timestamp(dateParsed.getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return true;
    }

    @DeleteMapping("/cancelEvent/{id}")
    public Boolean cancelEvent(@PathVariable(value="id") Long id) {
        if(eventsRepository.exists(id)){
            eventsRepository.delete(id);
            return true;
        }
        return false;
    }

    @PostMapping("/comment")
    public Boolean addComment(@RequestBody Order comment) {
        Order eventComment = new Order(comment.getComment(), comment.getCommenterName(), comment.getEventId());
        return eventCommentRepository.save(eventComment) != null;
    }

    @GetMapping("/getComments/{eventId}")
    public List<Order> getComments(@PathVariable(value = "eventId") Long eventId){
        return eventCommentRepository.getAllByEventId(eventId);
    }
*/
}

