(function(){
  var $j0=$response.body, $t0=JSON.parse($j0), $x1=$request.url, z='data', 
  e='psnl_vip_property', p=4070908800;

  function b(s){return decodeURIComponent(escape(atob(s)));}

  var url1=b('L3B1cmNoYXNlL2NzL3F1ZXJ5X3Byb3BlcnR5'), 
      url2=b('L3F1ZXJ5UHJvcGVydHk='), 
      url3=b('L2dldFByaXZpbGVnZUl0ZW0=');

  var v={a:1,b:0,c:"svip",d:true,e:1,f:0,g:1,h:"year",i:"appstore",j:0,k:p,l:"com.intsig.camscanner.premiums.oneyear.autorenewable.free.test1",m:{s:0,l:0,n:1,r:0,c:0},n:p,o:"appstore",q:2,r:1,s:p,t:0,u:{l:1,e:9999,d:9999},v:0,w:0};

  var V={
    group1_paid: v.a, ms_first_pay: v.b, vip_type: v.c, auto_renewal: v.d,
    in_trial: v.e, members_page: v.f, pc_vip: v.g, renew_type: v.h, renew_method: v.i,
    ys_first_pay: v.j, initial_tm: v.k, product_id: v.l, vip_level_info: v.m,
    nxt_renew_tm: v.n, last_payment_method: v.o, grade: v.q, svip: v.r,
    expiry: v.s, pending: v.t, level_info: v.u, inherited_flag: v.v,
    group2_paid: v.w
  };

  if ($x1.indexOf(url1)!==-1) $t0[z][e]=V;
  if ($x1.indexOf(url2)!==-1 && $t0[z] && $t0[z].ar_property) $t0[z].ar_property[e]=V;

  $done({body:JSON.stringify($t0)});
})();
