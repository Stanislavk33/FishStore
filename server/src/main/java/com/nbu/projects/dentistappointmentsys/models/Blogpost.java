package com.nbu.projects.dentistappointmentsys.models;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
public class Blogpost {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "blogost_id")
   private Long blogpostId;

 /*  @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
   @JoinColumn(name = "user_id", nullable = false)
   @JsonIgnore
   private User user;*/

   @Column(nullable = false)
   private String title;

   @Column(length = 10000)
   @Type(type="text")
   private String info;

   @Lob
   @Column(name="post_image", nullable=false, columnDefinition="mediumblob")
   private byte[] image;

   public Blogpost() {
   }

   public Blogpost(String title, String info, byte[] image) {
      this.title = title;
      this.info = info;
      this.image = image;
   }

   public Long getBlogpostId() {
      return blogpostId;
   }

   public void setBlogpostId(Long blogpostId) {
      this.blogpostId = blogpostId;
   }

   public String getTitle() {
      return title;
   }

   public void setTitle(String title) {
      this.title = title;
   }

   public String getInfo() {
      return info;
   }

   public void setInfo(String info) {
      this.info = info;
   }

   public byte[] getImage() {
      return image;
   }

   public void setImage(byte[] image) {
      this.image = image;
   }
}
