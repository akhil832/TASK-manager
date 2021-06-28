package com.akhil.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akhil.demo.model.taskmodel;
import com.akhil.demo.repo.taskrepo;

@RestController
@CrossOrigin(origins="*")
public class control {
	
	@Autowired
	private taskrepo repository;
	
	@RequestMapping("/demo")
	public List<taskmodel> Mapp()
	{
	
		return repository.findAll();
			
	}
	
	@PostMapping("/create")
	public List<taskmodel> Create(@RequestBody taskmodel data) {
		
		repository.insert(data);
		return  repository.findAll();
		
		
		
	}
	
	@GetMapping("/upd/{id}")
	public List<taskmodel> update(@PathVariable String id) {
		
		taskmodel a= repository.findById(id).orElseThrow();
		a.setDone(!a.isDone());
		repository.save(a);
		return  repository.findAll();
		
	}
	
	@GetMapping("/delete/{id}")
	public List<taskmodel> delete(@PathVariable String id) {
		
		repository.deleteById(id);
		return  repository.findAll();
		
	}
	
	
	

}
