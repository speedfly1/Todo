import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseServiceService {
  private eventSource!: EventSource;
  private messageSubject: Subject<any> = new Subject();
  
  constructor() {}

  public startListening() {
    // Create a new EventSource that connects to the server's /events endpoint
    this.eventSource = new EventSource('http://localhost:3000/events');

    // Listen for messages from the server
    this.eventSource.onmessage = (event) => {
      console.log("event");
      const data = JSON.parse(event.data);
      this.messageSubject.next(data);  // Emit data to subscribers
    };

    // Handle any errors that may occur
    this.eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
    };
  }

  // Method to get the emitted messages
  getMessages() {
    return this.messageSubject.asObservable();
  }

  stopListening() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
