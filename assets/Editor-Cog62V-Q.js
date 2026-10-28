import{g as j,_ as Pt,a as Hn,b as Xs,c as Vn,d as z,e as Tt,i as Fe,p as $n,u as Wn,E as Nt,q as Pe,f as Ne,h as H,j as Qs,k as Zs,S as ke,l as Be,F as dt,m as er,n as tr,L as nr,o as zn,r as sr,s as rr,t as ir,v as Et,C as kt,w as st,x as or,y as ar,z as cr,A as lr,B as v,D as ln,G as ye,H as ne,I as ze,J as l,K as Ue,M as un,N as ur,O as dr,P as Ot,Q as hr,R as fr,T as vt,U as pr,V as Kn,W as mr}from"./main-BMHKeutY.js";function xt(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function qn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gr=qn,Gn=new Nt("auth","Firebase",qn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new nr("@firebase/auth");function _r(n,...e){rt.logLevel<=zn.WARN&&rt.warn(`Auth (${ke}): ${n}`,...e)}function Ye(n,...e){rt.logLevel<=zn.ERROR&&rt.error(`Auth (${ke}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n,...e){throw Lt(n,...e)}function Y(n,...e){return Lt(n,...e)}function Jn(n,e,t){const s=Object.assign(Object.assign({},gr()),{[e]:t});return new Nt("auth","Firebase",s).create(e,{appName:n.name})}function le(n){return Jn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lt(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Gn.create(n,...e)}function p(n,e,...t){if(!n)throw Lt(e,...t)}function G(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ye(e),new Error(e)}function te(n,e){n||G(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vr(){return dn()==="http:"||dn()==="https:"}function dn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vr()||sr()||"connection"in navigator)?navigator.onLine:!0}function wr(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.shortDelay=e,this.longDelay=t,te(t>e,"Short delay should be less than long delay!"),this.isMobile=er()||tr()}get(){return yr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){te(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;G("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;G("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;G("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Tr=new He(3e4,6e4);function Q(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function q(n,e,t,s,r={}){return Xn(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Be(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return ir()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Fe(n.emulatorConfig.host)&&(u.credentials="include"),Yn.fetch()(await Qn(n,n.config.apiHost,t,a),u)})}async function Xn(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ir),e);try{const r=new kr(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ke(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ke(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ke(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ke(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jn(n,d,u);V(n,d)}}catch(r){if(r instanceof dt)throw r;V(n,"network-request-failed",{message:String(r)})}}async function ht(n,e,t,s,r={}){const i=await q(n,e,t,s,r);return"mfaPendingCredential"in i&&V(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qn(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?Ut(n.config,r):`${n.config.apiScheme}://${r}`;return br.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Er(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Y(this.auth,"network-request-failed")),Tr.get())})}}function Ke(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Y(n,e,s);return r.customData._tokenResponse=t,r}function hn(n){return n!==void 0&&n.enterprise!==void 0}class Rr{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Er(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sr(n,e){return q(n,"GET","/v2/recaptchaConfig",Q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n,e){return q(n,"POST","/v1/accounts:delete",e)}async function it(n,e){return q(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ar(n,e=!1){const t=j(n),s=await t.getIdToken(e),r=Dt(s);p(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Oe(yt(r.auth_time)),issuedAtTime:Oe(yt(r.iat)),expirationTime:Oe(yt(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yt(n){return Number(n)*1e3}function Dt(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ye("JWT malformed, contained fewer than 3 sections"),null;try{const r=rr(t);return r?JSON.parse(r):(Ye("Failed to decode base64 JWT payload"),null)}catch(r){return Ye("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function fn(n){const e=Dt(n);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof dt&&Pr(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Pr({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oe(this.lastLoginAt),this.creationTime=Oe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(n){var e;const t=n.auth,s=await n.getIdToken(),r=await De(n,it(t,{idToken:s}));p(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zn(i.providerUserInfo):[],a=xr(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new St(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function Or(n){const e=j(n);await ot(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xr(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Zn(n){return n.map(e=>{var{providerId:t}=e,s=xt(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(n,e){const t=await Xn(n,{},async()=>{const s=Be({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await Qn(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&Fe(n.emulatorConfig.host)&&(c.credentials="include"),Yn.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ur(n,e){return q(n,"POST","/v2/accounts:revokeToken",Q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){p(e.length!==0,"internal-error");const t=fn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Lr(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new be;return s&&(p(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(p(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(p(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new be,this.toJSON())}_performRefresh(){return G("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,e){p(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class K{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=xt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new St(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await De(this,this.stsTokenManager.getToken(this.auth,e));return p(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ar(this,e)}reload(){return Or(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new K(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ot(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(z(this.auth.app))return Promise.reject(le(this.auth));const e=await this.getIdToken();return await De(this,Cr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,d;const g=(s=t.displayName)!==null&&s!==void 0?s:void 0,_=(r=t.email)!==null&&r!==void 0?r:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=t.createdAt)!==null&&u!==void 0?u:void 0,S=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:P,emailVerified:C,isAnonymous:h,providerData:y,stsTokenManager:T}=t;p(P&&T,e,"internal-error");const k=be.fromJSON(this.name,T);p(typeof P=="string",e,"internal-error"),se(g,e.name),se(_,e.name),p(typeof C=="boolean",e,"internal-error"),p(typeof h=="boolean",e,"internal-error"),se(b,e.name),se(N,e.name),se(A,e.name),se(E,e.name),se(w,e.name),se(S,e.name);const F=new K({uid:P,auth:e,email:_,emailVerified:C,displayName:g,isAnonymous:h,photoURL:N,phoneNumber:b,tenantId:A,stsTokenManager:k,createdAt:w,lastLoginAt:S});return y&&Array.isArray(y)&&(F.providerData=y.map(_e=>Object.assign({},_e))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(e,t,s=!1){const r=new be;r.updateFromServerResponse(t);const i=new K({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ot(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];p(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Zn(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new be;a.updateFromIdToken(s);const c=new K({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new St(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Map;function ee(n){te(n instanceof Function,"Expected a class definition");let e=pn.get(n);return e?(te(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pn.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}es.type="NONE";const mn=es;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,e,t){return`firebase:${n}:${e}:${t}`}class Te{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Xe(this.userKey,r.apiKey,i),this.fullPersistenceKey=Xe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await it(this.auth,{idToken:e}).catch(()=>{});return t?K._fromGetAccountInfoResponse(this.auth,t,e):null}return K._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Te(ee(mn),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ee(mn);const o=Xe(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){let g;if(typeof d=="string"){const _=await it(e,{idToken:d}).catch(()=>{});if(!_)break;g=await K._fromGetAccountInfoResponse(e,_,d)}else g=K._fromJSON(e,d);u!==i&&(a=g),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Te(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Te(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ts(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(os(e))return"Blackberry";if(as(e))return"Webos";if(ns(e))return"Safari";if((e.includes("chrome/")||ss(e))&&!e.includes("edge/"))return"Chrome";if(is(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ts(n=H()){return/firefox\//i.test(n)}function ns(n=H()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ss(n=H()){return/crios\//i.test(n)}function rs(n=H()){return/iemobile/i.test(n)}function is(n=H()){return/android/i.test(n)}function os(n=H()){return/blackberry/i.test(n)}function as(n=H()){return/webos/i.test(n)}function Mt(n=H()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Dr(n=H()){var e;return Mt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mr(){return Qs()&&document.documentMode===10}function cs(n=H()){return Mt(n)||is(n)||as(n)||os(n)||/windows phone/i.test(n)||rs(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n,e=[]){let t;switch(n){case"Browser":t=gn(H());break;case"Worker":t=`${gn(H())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ke}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e={}){return q(n,"GET","/v2/passwordPolicy",Q(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=6;class Hr{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Br,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _n(this),this.idTokenSubscription=new _n(this),this.beforeStateQueue=new jr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ee(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Te.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await it(this,{idToken:e}),s=await K._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(z(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ot(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wr()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(z(this.app))return Promise.reject(le(this));const t=e?j(e):null;return t&&p(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return z(this.app)?Promise.reject(le(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return z(this.app)?Promise.reject(le(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fr(this),t=new Hr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ur(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ee(e)||this._popupRedirectResolver;p(t,this,"argument-error"),this.redirectPersistenceManager=await Te.create(this,[ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ls(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(z(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_r(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ge(n){return j(n)}class _n{constructor(e){this.auth=e,this.observer=null,this.addObserver=or(t=>this.observer=t)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $r(n){ft=n}function us(n){return ft.loadJS(n)}function Wr(){return ft.recaptchaEnterpriseScript}function zr(){return ft.gapiScript}function Kr(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class qr{constructor(){this.enterprise=new Gr}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Gr{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Jr="recaptcha-enterprise",ds="NO_RECAPTCHA";class Yr{constructor(e){this.type=Jr,this.auth=ge(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Sr(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Rr(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;hn(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ds)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qr().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&hn(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Wr();c.length!==0&&(c+=a),us(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function vn(n,e,t,s=!1,r=!1){const i=new Yr(n);let o;if(r)o=ds;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function yn(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await vn(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await vn(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n,e){const t=Pt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Tt(i,e??{}))return r;V(r,"already-initialized")}return t.initialize({options:e})}function Qr(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ee);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zr(n,e,t){const s=ge(n);p(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=hs(e),{host:o,port:a}=ei(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){p(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),p(Tt(u,s.config.emulator)&&Tt(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Fe(o)?($n(`${i}//${o}${c}`),Wn("Auth",!0)):ti()}function hs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ei(n){const e=hs(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:wn(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:wn(o)}}}function wn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ti(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return G("not implemented")}_getIdTokenResponse(e){return G("not implemented")}_linkToIdToken(e,t){return G("not implemented")}_getReauthenticationResolver(e){return G("not implemented")}}async function ni(n,e){return q(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n,e){return ht(n,"POST","/v1/accounts:signInWithPassword",Q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n,e){return ht(n,"POST","/v1/accounts:signInWithEmailLink",Q(n,e))}async function ii(n,e){return ht(n,"POST","/v1/accounts:signInWithEmailLink",Q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends jt{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Me(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Me(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yn(e,t,"signInWithPassword",si);case"emailLink":return ri(e,{email:this._email,oobCode:this._password});default:V(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yn(e,s,"signUpPassword",ni);case"emailLink":return ii(e,{idToken:t,email:this._email,oobCode:this._password});default:V(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(n,e){return ht(n,"POST","/v1/accounts:signInWithIdp",Q(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="http://localhost";class pe extends jt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):V("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=xt(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new pe(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ee(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ee(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ee(e,t)}buildRequest(){const e={requestUri:oi,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Be(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ci(n){const e=Pe(Ne(n)).link,t=e?Pe(Ne(e)).deep_link_id:null,s=Pe(Ne(n)).deep_link_id;return(s?Pe(Ne(s)).link:null)||s||t||e||n}class Ft{constructor(e){var t,s,r,i,o,a;const c=Pe(Ne(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,g=ai((r=c.mode)!==null&&r!==void 0?r:null);p(u&&d&&g,"argument-error"),this.apiKey=u,this.operation=g,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ci(e);try{return new Ft(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.providerId=Re.PROVIDER_ID}static credential(e,t){return Me._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ft.parseLink(t);return p(s,"argument-error"),Me._fromEmailAndCode(e,s.code,s.tenantId)}}Re.PROVIDER_ID="password";Re.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Re.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends fs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Ve{constructor(){super("facebook.com")}static credential(e){return pe._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch{return null}}}re.FACEBOOK_SIGN_IN_METHOD="facebook.com";re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends Ve{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pe._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ie.credential(t,s)}catch{return null}}}ie.GOOGLE_SIGN_IN_METHOD="google.com";ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends Ve{constructor(){super("github.com")}static credential(e){return pe._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch{return null}}}oe.GITHUB_SIGN_IN_METHOD="github.com";oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends Ve{constructor(){super("twitter.com")}static credential(e,t){return pe._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ae.credential(t,s)}catch{return null}}}ae.TWITTER_SIGN_IN_METHOD="twitter.com";ae.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await K._fromIdTokenResponse(e,s,r),o=In(s);return new ue({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=In(s);return new ue({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function In(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends dt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new at(e,t,s,r)}}function ps(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?at._fromErrorAndOperation(n,i,e,s):i})}async function li(n,e,t=!1){const s=await De(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ue._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(n,e,t=!1){const{auth:s}=n;if(z(s.app))return Promise.reject(le(s));const r="reauthenticate";try{const i=await De(n,ps(s,r,e,n),t);p(i.idToken,s,"internal-error");const o=Dt(i.idToken);p(o,s,"internal-error");const{sub:a}=o;return p(n.uid===a,s,"user-mismatch"),ue._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&V(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(n,e,t=!1){if(z(n.app))return Promise.reject(le(n));const s="signIn",r=await ps(n,s,e),i=await ue._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function di(n,e){return ms(ge(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ht._fromServerResponse(e,t):"totpInfo"in t?Vt._fromServerResponse(e,t):V(e,"internal-error")}}class Ht extends Bt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ht(t)}}class Vt extends Bt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Vt(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){const e=ge(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function fi(n,e,t){return z(n.app)?Promise.reject(le(n)):di(j(n),Re.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hi(n),s})}function pi(n,e,t,s){return j(n).onIdTokenChanged(e,t,s)}function mi(n,e,t){return j(n).beforeAuthStateChanged(e,t)}function gi(n,e,t,s){return j(n).onAuthStateChanged(e,t,s)}function gs(n){return j(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new we("enroll",e,t)}static _fromMfaPendingCredential(e){return new we("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return we._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return we._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=ge(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(a=>Bt._fromServerResponse(s,a));p(r.mfaPendingCredential,s,"internal-error");const o=we._fromMfaPendingCredential(r.mfaPendingCredential);return new $t(o,i,async a=>{const c=await a._process(s,o);delete r.mfaInfo,delete r.mfaPendingCredential;const u=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const d=await ue._fromIdTokenResponse(s,t.operationType,u);return await s._updateCurrentUser(d.user),d;case"reauthenticate":return p(t.user,s,"internal-error"),ue._forOperation(t.user,t.operationType,u);default:V(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function _i(n,e){var t;const s=j(n),r=e;return p(e.customData.operationType,s,"argument-error"),p((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),$t._fromError(s,r)}function vi(n,e){return q(n,"POST","/v2/accounts/mfaEnrollment:start",Q(n,e))}function yi(n,e){return q(n,"POST","/v2/accounts/mfaEnrollment:finalize",Q(n,e))}const ct="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ct,"1"),this.storage.removeItem(ct),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=1e3,Ii=10;class vs extends _s{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Mr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ii):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},wi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vs.type="LOCAL";const bi=vs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends _s{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ys.type="SESSION";const ws=ys;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new pt(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Ti(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Wt("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(g){const _=g;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return window}function ki(n){X().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function Ri(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Si(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ci(){return Is()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="firebaseLocalStorageDb",Ai=1,lt="firebaseLocalStorage",Ts="fbase_key";class $e{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mt(n,e){return n.transaction([lt],e?"readwrite":"readonly").objectStore(lt)}function Pi(){const n=indexedDB.deleteDatabase(bs);return new $e(n).toPromise()}function Ct(){const n=indexedDB.open(bs,Ai);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(lt,{keyPath:Ts})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(lt)?e(s):(s.close(),await Pi(),e(await Ct()))})})}async function bn(n,e,t){const s=mt(n,!0).put({[Ts]:e,value:t});return new $e(s).toPromise()}async function Ni(n,e){const t=mt(n,!1).get(e),s=await new $e(t).toPromise();return s===void 0?null:s.value}function Tn(n,e){const t=mt(n,!0).delete(e);return new $e(t).toPromise()}const Oi=800,xi=3;class Es{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ct(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>xi)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Is()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pt._getInstance(Ci()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ri(),!this.activeServiceWorker)return;this.sender=new Ei(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Si()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ct();return await bn(e,ct,"1"),await Tn(e,ct),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>bn(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Ni(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=mt(r,!1).getAll();return new $e(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Es.type="LOCAL";const Li=Es;function Ui(n,e){return q(n,"POST","/v2/accounts/mfaSignIn:finalize",Q(n,e))}new He(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n,e){return e?ee(e):(p(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends jt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ee(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ee(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ee(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mi(n){return ms(n.auth,new zt(n),n.bypassAuthState)}function ji(n){const{auth:e,user:t}=n;return p(t,e,"internal-error"),ui(t,new zt(n),n.bypassAuthState)}async function Fi(n){const{auth:e,user:t}=n;return p(t,e,"internal-error"),li(t,new zt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mi;case"linkViaPopup":case"linkViaRedirect":return Fi;case"reauthViaPopup":case"reauthViaRedirect":return ji;default:V(this.auth,"internal-error")}}resolve(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new He(2e3,1e4);class Ie extends ks{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){te(this.filter.length===1,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bi.get())};e()}}Ie.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="pendingRedirect",Qe=new Map;class Vi extends ks{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Qe.get(this.auth._key());if(!e){try{const s=await $i(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Qe.set(this.auth._key(),e)}return this.bypassAuthState||Qe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $i(n,e){const t=Ki(e),s=zi(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Wi(n,e){Qe.set(n._key(),e)}function zi(n){return ee(n._redirectPersistence)}function Ki(n){return Xe(Hi,n.config.apiKey,n.name)}async function qi(n,e,t=!1){if(z(n.app))return Promise.reject(le(n));const s=ge(n),r=Di(s,e),o=await new Vi(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=10*60*1e3;class Ji{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Rs(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gi&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(e))}saveEventToCache(e){this.cachedEventUids.add(En(e)),this.lastProcessedEventTime=Date.now()}}function En(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rs({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yi(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rs(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(n,e={}){return q(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zi=/^https?/;async function eo(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xi(n);for(const t of e)try{if(to(t))return}catch{}V(n,"unauthorized-domain")}function to(n){const e=Rt(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Zi.test(t))return!1;if(Qi.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new He(3e4,6e4);function kn(){const n=X().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function so(n){return new Promise((e,t)=>{var s,r,i;function o(){kn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kn(),t(Y(n,"network-request-failed"))},timeout:no.get()})}if(!((r=(s=X().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=X().gapi)===null||i===void 0)&&i.load)o();else{const a=Kr("iframefcb");return X()[a]=()=>{gapi.load?o():t(Y(n,"network-request-failed"))},us(`${zr()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ze=null,e})}let Ze=null;function ro(n){return Ze=Ze||so(n),Ze}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new He(5e3,15e3),oo="__/auth/iframe",ao="emulator/auth/iframe",co={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uo(n){const e=n.config;p(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ut(e,ao):`https://${n.config.authDomain}/${oo}`,s={apiKey:e.apiKey,appName:n.name,v:ke},r=lo.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Be(s).slice(1)}`}async function ho(n){const e=await ro(n),t=X().gapi;return p(t,n,"internal-error"),e.open({where:document.body,url:uo(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:co,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Y(n,"network-request-failed"),a=X().setTimeout(()=>{i(o)},io.get());function c(){X().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},po=500,mo=600,go="_blank",_o="http://localhost";class Rn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vo(n,e,t,s=po,r=mo){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fo),{width:s.toString(),height:r.toString(),top:i,left:o}),u=H().toLowerCase();t&&(a=ss(u)?go:t),ts(u)&&(e=e||_o,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[b,N])=>`${_}${b}=${N},`,"");if(Dr(u)&&a!=="_self")return yo(e||"",a),new Rn(null);const g=window.open(e||"",a,d);p(g,n,"popup-blocked");try{g.focus()}catch{}return new Rn(g)}function yo(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="__/auth/handler",Io="emulator/auth/handler",bo=encodeURIComponent("fac");async function Sn(n,e,t,s,r,i){p(n.config.authDomain,n,"auth-domain-config-required"),p(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ke,eventId:r};if(e instanceof fs){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Zs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))o[d]=g}if(e instanceof Ve){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),u=c?`#${bo}=${encodeURIComponent(c)}`:"";return`${To(n)}?${Be(a).slice(1)}${u}`}function To({config:n}){return n.emulator?Ut(n,Io):`https://${n.authDomain}/${wo}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="webStorageSupport";class Eo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ws,this._completeRedirectFn=qi,this._overrideRedirectResult=Wi}async _openPopup(e,t,s,r){var i;te((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sn(e,t,s,Rt(),r);return vo(e,o,Wt())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Sn(e,t,s,Rt(),r);return ki(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(te(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ho(e),s=new Ji(e);return t.register("authEvent",r=>(p(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wt,{type:wt},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wt];o!==void 0&&t(!!o),V(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cs()||ns()||Mt()}}const ko=Eo;class Ro{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return G("unexpected MultiFactorSessionType")}}}class et{static assertionForEnrollment(e,t){return je._fromSecret(e,t)}static assertionForSignIn(e,t){return je._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const s=e;p(typeof((t=s.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");const r=await vi(s.user.auth,{idToken:s.credential,totpEnrollmentInfo:{}});return Kt._fromStartTotpMfaEnrollmentResponse(r,s.user.auth)}}et.FACTOR_ID="totp";class je extends Ro{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new je(t,void 0,e)}static _fromEnrollmentId(e,t){return new je(t,e)}async _finalizeEnroll(e,t,s){return p(typeof this.secret<"u",e,"argument-error"),yi(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){p(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const s={verificationCode:this.otp};return Ui(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}}class Kt{constructor(e,t,s,r,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Kt(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let r=!1;return(qe(e)||qe(t))&&(r=!0),r&&(qe(e)&&(e=((s=this.auth.currentUser)===null||s===void 0?void 0:s.email)||"unknownuser"),qe(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function qe(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var Cn="@firebase/auth",An="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ao(n){Et(new kt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;p(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ls(n)},u=new Vr(s,r,i,c);return Qr(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Et(new kt("auth-internal",e=>{const t=ge(e.getProvider("auth").getImmediate());return(s=>new So(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(Cn,An,Co(n)),st(Cn,An,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=5*60,No=Hn("authIdTokenMaxAge")||Po;let Pn=null;const Oo=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>No)return;const r=t==null?void 0:t.token;Pn!==r&&(Pn=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xo(n=Vn()){const e=Pt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xr(n,{popupRedirectResolver:ko,persistence:[Li,bi,ws]}),s=Hn("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Oo(i.toString());mi(t,o,()=>o(t.currentUser)),pi(t,a=>o(a))}}const r=Xs("auth");return r&&Zr(t,`http://${r}`),t}function Lo(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}$r({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Y("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Lo().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ao("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="firebasestorage.googleapis.com",Cs="storageBucket",Uo=2*60*1e3,Do=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends dt{constructor(e,t,s=0){super(It(e),`Firebase Storage: ${t} (${It(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return It(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var U;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(U||(U={}));function It(n){return"storage/"+n}function qt(){const n="An unknown error occurred, please check the error payload for server response.";return new D(U.UNKNOWN,n)}function Mo(n){return new D(U.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function jo(n){return new D(U.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fo(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(U.UNAUTHENTICATED,n)}function Bo(){return new D(U.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ho(n){return new D(U.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Vo(){return new D(U.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $o(){return new D(U.CANCELED,"User canceled the upload/download.")}function Wo(n){return new D(U.INVALID_URL,"Invalid URL '"+n+"'.")}function zo(n){return new D(U.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ko(){return new D(U.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Cs+"' property when initializing the app?")}function qo(){return new D(U.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Go(n){return new D(U.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function At(n){return new D(U.INVALID_ARGUMENT,n)}function As(){return new D(U.APP_DELETED,"The Firebase app was deleted.")}function Jo(n){return new D(U.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xe(n,e){return new D(U.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ae(n){throw new D(U.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=B.makeFromUrl(e,t)}catch{return new B(e,"")}if(s.path==="")return s;throw zo(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const d="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",b=new RegExp(`^https?://${g}/${d}/b/${r}/o${_}`,"i"),N={bucket:1,path:3},A=t===Ss?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",w=new RegExp(`^https?://${A}/${r}/${E}`,"i"),P=[{regex:a,indices:c,postModify:i},{regex:b,indices:N,postModify:u},{regex:w,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<P.length;C++){const h=P[C],y=h.regex.exec(e);if(y){const T=y[h.indices.bucket];let k=y[h.indices.path];k||(k=""),s=new B(T,k),h.postModify(s);break}}if(s==null)throw Wo(e);return s}}class Yo{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function d(...E){u||(u=!0,e.apply(null,E))}function g(E){r=setTimeout(()=>{r=null,n(b,c())},E)}function _(){i&&clearTimeout(i)}function b(E,...w){if(u){_();return}if(E){_(),d.call(null,E,...w);return}if(c()||o){_(),d.call(null,E,...w);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,g(P)}let N=!1;function A(E){N||(N=!0,_(),!u&&(r!==null?(E||(a=2),clearTimeout(r),g(0)):E||(a=1)))}return g(0),i=setTimeout(()=>{o=!0,A(!0)},t),A}function Qo(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){return n!==void 0}function ea(n){return typeof n=="object"&&!Array.isArray(n)}function Ps(n){return typeof n=="string"||n instanceof String}function Nn(n){return Gt()&&n instanceof Blob}function Gt(){return typeof Blob<"u"}function On(n,e,t,s){if(s<e)throw At(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw At(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function ta(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var fe;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(fe||(fe={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,s,r,i,o,a,c,u,d,g,_=!0,b=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=g,this.retry=_,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,A)=>{this.resolve_=N,this.reject_=A,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ge(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===fe.NO_ERROR,c=i.getStatus();if(!a||na(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===fe.ABORT;s(!1,new Ge(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ge(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Zo(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=qt();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?As():$o();o(c)}else{const c=Vo();o(c)}};this.canceled_?t(!1,new Ge(!1,null,!0)):this.backoffId_=Xo(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qo(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ge{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function ra(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ia(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oa(n,e){e&&(n["X-Firebase-GMPID"]=e)}function aa(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ca(n,e,t,s,r,i,o=!0,a=!1){const c=ta(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return oa(d,e),ra(d,t),ia(d,i),aa(d,s),new sa(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ua(...n){const e=la();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Gt())return new Blob(n);throw new D(U.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function da(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){if(typeof atob>"u")throw Go("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bt{constructor(e,t){this.data=e,this.contentType=t||null}}function fa(n,e){switch(n){case J.RAW:return new bt(Ns(e));case J.BASE64:case J.BASE64URL:return new bt(Os(n,e));case J.DATA_URL:return new bt(ma(e),ga(e))}throw qt()}function Ns(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=n.charCodeAt(++t);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function pa(n){let e;try{e=decodeURIComponent(n)}catch{throw xe(J.DATA_URL,"Malformed data URL.")}return Ns(e)}function Os(n,e){switch(n){case J.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw xe(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case J.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw xe(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=ha(e)}catch(r){throw r.message.includes("polyfill")?r:xe(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class xs{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw xe(J.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=_a(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function ma(n){const e=new xs(n);return e.base64?Os(J.BASE64,e.rest):pa(e.rest)}function ga(n){return new xs(n).contentType}function _a(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){let s=0,r="";Nn(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Nn(this.data_)){const s=this.data_,r=da(s,e,t);return r===null?null:new ce(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new ce(s,!0)}}static getBlob(...e){if(Gt()){const t=e.map(s=>s instanceof ce?s.data_:s);return new ce(ua.apply(null,t))}else{const t=e.map(o=>Ps(o)?fa(J.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new ce(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){let e;try{e=JSON.parse(n)}catch{return null}return ea(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function wa(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Ls(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){return e}class M{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||Ia}}let Je=null;function ba(n){return!Ps(n)||n.length<2?n:Ls(n)}function Us(){if(Je)return Je;const n=[];n.push(new M("bucket")),n.push(new M("generation")),n.push(new M("metageneration")),n.push(new M("name","fullPath",!0));function e(i,o){return ba(o)}const t=new M("name");t.xform=e,n.push(t);function s(i,o){return o!==void 0?Number(o):o}const r=new M("size");return r.xform=s,n.push(r),n.push(new M("timeCreated")),n.push(new M("updated")),n.push(new M("md5Hash",null,!0)),n.push(new M("cacheControl",null,!0)),n.push(new M("contentDisposition",null,!0)),n.push(new M("contentEncoding",null,!0)),n.push(new M("contentLanguage",null,!0)),n.push(new M("contentType",null,!0)),n.push(new M("metadata","customMetadata",!0)),Je=n,Je}function Ta(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new B(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Ea(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const o=t[i];s[o.local]=o.xform(s,e[o.server])}return Ta(s,n),s}function ka(n,e,t){const s=va(e);return s===null?null:Ea(n,s,t)}function Ra(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Yt{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n){if(!n)throw qt()}function Ds(n,e){function t(s,r){const i=ka(n,r,e);return Sa(i!==null),i}return t}function Ms(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=Bo():r=Fo():t.getStatus()===402?r=jo(n.bucket):t.getStatus()===403?r=Ho(n.path):r=s,r.status=t.getStatus(),r.serverResponse=s.serverResponse,r}return e}function js(n){const e=Ms(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Mo(n.path)),i.serverResponse=r.serverResponse,i}return t}function Ca(n,e,t){const s=e.fullServerUrl(),r=Jt(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new Yt(r,i,Ds(n,t),o);return a.errorHandler=js(e),a}function Aa(n,e,t){const s=e.fullServerUrl(),r=Jt(s,n.host,n._protocol)+"?alt=media",i="GET",o=n.maxOperationRetryTime,a=new Yt(r,i,(c,u)=>u,o);return a.errorHandler=js(e),a}function Pa(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Na(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=Pa(null,e)),s}function Oa(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let C=0;C<2;C++)P=P+Math.random().toString().slice(2);return P}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Na(e,s,r),d=Ra(u,t),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+c+"--",b=ce.getBlob(g,s,_);if(b===null)throw qo();const N={name:u.fullPath},A=Jt(i,n.host,n._protocol),E="POST",w=n.maxUploadRetryTime,S=new Yt(A,E,Ds(n,t),w);return S.urlParams=N,S.headers=o,S.body=b.uploadData(),S.errorHandler=Ms(e),S}class Fs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fe.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fe.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fe.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r,i){if(this.sent_)throw Ae("cannot .send() more than once");if(Fe(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ae("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ae("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ae("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ae("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xa extends Fs{initXhr(){this.xhr_.responseType="text"}}function Bs(){return new xa}class La extends Fs{initXhr(){this.xhr_.responseType="blob"}}function Ua(){return new La}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this._service=e,t instanceof B?this._location=t:this._location=B.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new me(e,t)}get root(){const e=new B(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ls(this._location.path)}get storage(){return this._service}get parent(){const e=ya(this._location.path);if(e===null)return null;const t=new B(this._location.bucket,e);return new me(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Jo(e)}}function Da(n,e){n._throwIfRoot("getBlob");const t=Aa(n.storage,n._location);return n.storage.makeRequestWithTokens(t,Ua).then(s=>s)}function Ma(n,e,t){n._throwIfRoot("uploadBytes");const s=Oa(n.storage,n._location,Us(),new ce(e,!0),t);return n.storage.makeRequestWithTokens(s,Bs).then(r=>({metadata:r,ref:n}))}function ja(n){n._throwIfRoot("getMetadata");const e=Ca(n.storage,n._location,Us());return n.storage.makeRequestWithTokens(e,Bs)}function Fa(n,e){const t=wa(n._location.path,e),s=new B(n._location.bucket,t);return new me(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){return/^[A-Za-z]+:\/\//.test(n)}function Ha(n,e){return new me(n,e)}function Hs(n,e){if(n instanceof Xt){const t=n;if(t._bucket==null)throw Ko();const s=new me(t,t._bucket);return e!=null?Hs(s,e):s}else return e!==void 0?Fa(n,e):n}function Va(n,e){if(e&&Ba(e)){if(n instanceof Xt)return Ha(n,e);throw At("To use ref(service, url), the first argument must be a Storage instance.")}else return Hs(n,e)}function xn(n,e){const t=e==null?void 0:e[Cs];return t==null?null:B.makeFromBucketSpec(t,n)}function $a(n,e,t,s={}){n.host=`${e}:${t}`;const r=Fe(e);r&&($n(`https://${n.host}/b`),Wn("Storage",!0)),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:cr(i,n.app.options.projectId))}class Xt{constructor(e,t,s,r,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Ss,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Uo,this._maxUploadRetryTime=Do,this._requests=new Set,r!=null?this._bucket=B.makeFromBucketSpec(r,this._host):this._bucket=xn(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=B.makeFromBucketSpec(this._url,e):this._bucket=xn(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){On("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){On("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(z(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new me(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new Yo(As());{const o=ca(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const Ln="@firebase/storage",Un="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="storage";function $s(n,e,t){return n=j(n),Ma(n,e,t)}function Wa(n){return n=j(n),ja(n)}function tt(n,e){return n=j(n),Va(n,e)}function za(n=Vn(),e){n=j(n);const s=Pt(n,Vs).getImmediate({identifier:e}),r=ar("storage");return r&&Ka(s,...r),s}function Ka(n,e,t,s={}){$a(n,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){return n=j(n),Da(n)}function qa(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Xt(t,s,r,e,ke)}function Ga(){Et(new kt(Vs,qa,"PUBLIC").setMultipleInstances(!0)),st(Ln,Un,""),st(Ln,Un,"esm2017")}Ga();const he=xo(Kn),nt=za(Kn),Ja=document.documentElement.dataset.page==="history",Ya="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Xa=n=>`https://firebasestorage.googleapis.com/v0/b/${ur}/o/${encodeURIComponent(n)}?alt=media`,Qa=()=>{const n=new Uint8Array(12);return crypto.getRandomValues(n),`${Array.from(n,e=>e.toString(16).padStart(2,"0")).join("")}.jpg`},Za=()=>({text:{},photos:{},order:null}),ut=n=>JSON.parse(JSON.stringify({text:n.text||{},photos:n.photos||{},order:n.order||Ue})),Mn=(n,e)=>JSON.stringify(ut(n))===JSON.stringify(ut(e));async function ec(n){if(!/^image\/(jpeg|png|webp)$/.test(n.type))throw new Error("Please choose a JPEG, PNG or WebP photo.");const e=await createImageBitmap(n),t=Math.min(1,2400/Math.max(e.width,e.height)),s=Math.round(e.width*t),r=Math.round(e.height*t),i=document.createElement("canvas");i.width=s,i.height=r;const o=i.getContext("2d");o.fillStyle="#fff",o.fillRect(0,0,s,r),o.drawImage(e,0,0,s,r);const a=await new Promise(c=>i.toBlob(c,"image/jpeg",.86));if(!a)throw new Error("That photo couldn’t be read.");if(a.size>8*1024*1024)throw new Error("That photo is too large even after resizing.");return a}const Le=n=>{const e=n&&n.code||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"That email and password don’t match an account.":e.includes("too-many-requests")?"Too many attempts. Wait a few minutes and try again.":e.includes("network")?"No connection. Check the internet and try again.":e.includes("invalid-verification-code")?"That code isn’t right. Try the latest code from your authenticator app.":e.includes("permission-denied")||e.includes("unauthorized")?"This account isn’t allowed to do that.":n&&n.message||"Something went wrong."};function dc({onClose:n}){const{published:e,setEditor:t}=lr(),[s,r]=v.useState(void 0),[i,o]=v.useState("starting"),[a,c]=v.useState(null),[u,d]=v.useState(null),[g,_]=v.useState(null),[b,N]=v.useState(!0),[A,E]=v.useState(0),[w,S]=v.useState(""),[P,C]=v.useState(""),[h,y]=v.useState(null),[T,k]=v.useState(null),[F,_e]=v.useState({}),I=v.useRef(new Set),R=v.useRef(a);R.current=a,v.useEffect(()=>gi(he,f=>r(f)),[]),v.useEffect(()=>{if(s===void 0)return;if(!s){o("signin"),c(null);return}let f=!0;return o("checking"),(async()=>{try{const[m,x]=await Promise.all([ln(ye(ne,"siteContent","draft")),ln(ye(ne,"siteContent","published"))]);if(!f)return;const O=ze(x.exists()?x.data():null),$=m.exists()?ze(m.data()):O;_(O),d($),c($),E(Ce=>Ce+1),o("ready")}catch(m){if(!f)return;o(m&&m.code==="permission-denied"?"denied":"signin"),m&&m.code==="permission-denied"||C(Le(m))}})(),()=>{f=!1}},[s]);const L=!!(a&&u&&!Mn(a,u)),Z=!!(a&&g&&!Mn(a,g));v.useEffect(()=>{const f=m=>{L&&(m.preventDefault(),m.returnValue="")};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[L]),v.useEffect(()=>(document.body.classList.toggle("ws-editor-on",i==="ready"),document.body.classList.toggle("ws-editing",i==="ready"&&b),()=>{document.body.classList.remove("ws-editor-on","ws-editing")}),[i,b]);const de=v.useCallback((f,m)=>{c(x=>{if(!x)return x;const O={...x.text};return m===""||m==null?delete O[f]:O[f]=m,{...x,text:O}})},[]),zs=v.useCallback((f,m)=>{c(x=>{const O={...x.photos};return m?O[f]=m:delete O[f],{...x,photos:O}})},[]),gt=v.useCallback(f=>F[f]?F[f]:(I.current.has(f)||(I.current.add(f),Dn(tt(nt,f)).then(m=>_e(x=>({...x,[f]:URL.createObjectURL(m)}))).catch(()=>{I.current.delete(f)})),Ya),[F]),Qt=v.useCallback((f,m,x)=>y({type:"photos",k:f,fallback:m,opts:x}),[]),Zt=v.useCallback(f=>{k(null),y({type:"link",...f})},[]),en=v.useCallback(f=>{k(null),y({type:"list",spec:f})},[]),tn=v.useCallback(()=>{y(null),E(f=>f+1)},[]);v.useEffect(()=>{if(i!=="ready")return;const f=document.querySelector(".ed-bar");if(!f||typeof ResizeObserver>"u")return;const m=new ResizeObserver(()=>document.documentElement.style.setProperty("--ed-bar-h",`${f.offsetHeight}px`));return m.observe(f),()=>{m.disconnect(),document.documentElement.style.removeProperty("--ed-bar-h")}},[i]),v.useEffect(()=>{if(i!=="ready"||!b)return;const f=O=>O&&O.closest&&O.closest(".ed-bar, .ed-modal, .ed-toolbar, .ed-reset"),m=O=>{const $=O.target;f($)||$&&$.closest&&$.closest("a[href]")&&O.preventDefault()},x=O=>{f(O.target)||O.preventDefault()};return document.addEventListener("click",m,!0),document.addEventListener("submit",x,!0),()=>{document.removeEventListener("click",m,!0),document.removeEventListener("submit",x,!0)}},[i,b]);const nn=v.useCallback((f,m)=>k({el:f,...m}),[]),sn=v.useCallback(()=>setTimeout(()=>{(!document.activeElement||!document.activeElement.closest(".ed-field, .ed-toolbar"))&&k(null)},150),[]),rn=v.useMemo(()=>i==="ready"&&a?{draft:a,editing:b,revision:A,setText:de,photoUrl:gt,openPhotos:Qt,openLink:Zt,openList:en,onFocusField:nn,onBlurField:sn}:null,[i,a,b,A,de,gt,Qt,Zt,en,nn,sn]);v.useEffect(()=>{t(rn)},[rn,t]),v.useEffect(()=>()=>t(null),[t]);const Se=f=>{C(f),setTimeout(()=>C(m=>m===f?"":m),5e3)},We=()=>({updatedAt:pr(),updatedBy:he.currentUser.uid,updatedByName:(he.currentUser.email||"").slice(0,120)});async function Ks(){S("Saving draft…");try{const f=ut(R.current),m=un(ne);m.set(ye(ne,"siteContent","draft"),{...f,...We()}),await m.commit(),d(ze(f)),Se("Draft saved. Only editors can see it.")}catch(f){Se(`Couldn’t save: ${Le(f)}`)}S("")}async function qs(){y(null),S("Publishing…");try{const f=R.current,m={};for(const[Ce,Js]of Object.entries(f.photos)){m[Ce]=[];for(const W of Js)if(W.path&&W.path.startsWith("site-draft/")){const _t=W.path.slice(11),ve=tt(nt,`site/${_t}`);let cn=!1;try{await Wa(ve),cn=!0}catch{}if(!cn){const Ys=await Dn(tt(nt,W.path));await $s(ve,Ys,{contentType:"image/jpeg",cacheControl:"public, max-age=31536000, immutable"})}m[Ce].push({url:Xa(`site/${_t}`),alt:W.alt||"",credit:W.credit||"",creditHref:W.creditHref||""})}else{const{path:_t,...ve}=W;m[Ce].push({...W.url?{url:W.url}:{src:W.src||""},alt:ve.alt||"",credit:ve.credit||"",creditHref:ve.creditHref||""})}}const x=ut({...f,photos:m}),O=un(ne);O.set(ye(ne,"siteContent","published"),{...x,...We()}),O.set(ye(ne,"siteContent","draft"),{...x,...We()}),O.set(ye(dr(ne,"siteContentHistory")),{...x,...We()}),await O.commit();const $=ze(x);c($),d($),_($);try{localStorage.setItem("ws-site-published-v1",JSON.stringify($))}catch{}Se("Published. The live site now shows these changes.")}catch(f){Se(`Couldn’t publish: ${Le(f)}`)}S("")}function Gs(){y(null),c(u),E(f=>f+1),Se("Unsaved changes discarded.")}function on(){L&&!window.confirm("You have unsaved changes. Close the editor and lose them?")||(t(null),n())}if(i==="starting")return null;if(i==="signin"||i==="checking"||i==="denied")return l.jsx(nc,{status:i,user:s,note:P,onClose:on});const an=a?tc(a,g||Za()):0;return l.jsxs(l.Fragment,{children:[b&&T&&T.el&&T.el.isConnected&&!T.heading&&l.jsx(sc,{field:T}),b&&T&&T.el&&T.el.isConnected&&l.jsx(rc,{field:T,draft:a,onReset:f=>{de(f,""),E(m=>m+1),k(null)}}),l.jsxs("div",{className:"ed-bar",role:"region","aria-label":"Website editor",children:[l.jsxs("div",{className:"ed-bar-state",children:[l.jsx("b",{children:"Website editor"}),l.jsx("span",{"aria-live":"polite",children:w||P||(L?"Unsaved changes":Z?"Draft saved, not published yet":"Up to date with the live site")})]}),l.jsxs("div",{className:"ed-bar-actions",children:[l.jsx("button",{type:"button",className:b?"on":"","aria-pressed":b,onClick:()=>N(!0),children:"Edit"}),l.jsx("button",{type:"button",className:b?"":"on","aria-pressed":!b,onClick:()=>{N(!1),k(null)},children:"Preview"}),!Ja&&l.jsx("button",{type:"button",onClick:()=>y({type:"sections"}),children:"Sections"}),l.jsx("button",{type:"button",onClick:Ks,disabled:!!w||!L,children:"Save draft"}),l.jsx("button",{type:"button",className:"primary",onClick:()=>y({type:"publish"}),disabled:!!w||!Z,children:"Publish"}),l.jsx("button",{type:"button",onClick:()=>y({type:"discard"}),disabled:!!w||!L,children:"Discard"}),l.jsx("button",{type:"button",onClick:async()=>{L&&!window.confirm("Sign out and lose unsaved changes?")||await gs(he)},children:"Sign out"}),l.jsx("button",{type:"button",onClick:on,"aria-label":"Close the editor",children:"Close"})]})]}),h&&h.type==="photos"&&l.jsx(ic,{k:h.k,fallback:h.fallback,credits:h.opts&&h.opts.credits,list:a.photos[h.k],photoUrl:gt,onChange:f=>zs(h.k,f),onClose:()=>y(null),addBlob:(f,m)=>_e(x=>({...x,[f]:m}))}),h&&h.type==="link"&&l.jsx(cc,{spec:h,text:a.text,setText:de,onClose:tn}),h&&h.type==="list"&&l.jsx(lc,{spec:h.spec,text:a.text,setText:de,onClose:tn}),h&&h.type==="sections"&&l.jsx(oc,{order:a.order||Ue,onChange:f=>c(m=>({...m,order:f})),onClose:()=>y(null)}),h&&h.type==="publish"&&l.jsx(Bn,{title:"Publish to the live website?",body:`Everyone visiting the site will see this draft (${an} change${an===1?"":"s"} from what’s live now).${L?" Your unsaved changes are included.":""}`,yes:"Publish",onYes:qs,onNo:()=>y(null)}),h&&h.type==="discard"&&l.jsx(Bn,{title:"Discard unsaved changes?",body:"The page goes back to your last saved draft.",yes:"Discard",onYes:Gs,onNo:()=>y(null)})]})}function tc(n,e){let t=0;const s=(r,i)=>new Set([...Object.keys(r||{}),...Object.keys(i||{})]);for(const r of s(n.text,e.text))(n.text[r]||"")!==(e.text[r]||"")&&t++;for(const r of s(n.photos,e.photos))JSON.stringify(n.photos[r]||null)!==JSON.stringify(e.photos[r]||null)&&t++;return JSON.stringify(n.order||Ue)!==JSON.stringify(e.order||Ue)&&t++,t}function nc({status:n,user:e,note:t,onClose:s}){const[r,i]=v.useState(""),[o,a]=v.useState(""),[c,u]=v.useState(""),[d,g]=v.useState(null),[_,b]=v.useState(""),[N,A]=v.useState(!1);async function E(w){w.preventDefault(),b(""),A(!0);try{if(d){const S=d.hints.find(C=>C.factorId===et.FACTOR_ID),P=et.assertionForSignIn(S.uid,c.trim());await d.resolveSignIn(P)}else await fi(he,r.trim(),o)}catch(S){if(S&&S.code==="auth/multi-factor-auth-required"){const P=_i(he,S);P.hints.some(C=>C.factorId===et.FACTOR_ID)?g(P):b("This account uses a sign-in check the editor doesn’t support yet (only authenticator-app codes work here).")}else b(Le(S))}A(!1)}return l.jsx("div",{className:"ed-modal",role:"dialog","aria-modal":"true","aria-labelledby":"ed-signin-title",children:l.jsxs("div",{className:"ed-card",children:[l.jsx("h2",{id:"ed-signin-title",children:"Website editor"}),n==="checking"&&l.jsx("p",{children:"Checking your access…"}),n==="denied"&&l.jsxs(l.Fragment,{children:[l.jsxs("p",{children:[e&&e.email?`${e.email} isn’t`:"This account isn’t"," approved to edit the website. Ask the owner to add it."]}),l.jsxs("div",{className:"ed-row",children:[l.jsx("button",{type:"button",onClick:()=>gs(he),children:"Use another account"}),l.jsx("button",{type:"button",onClick:s,children:"Close"})]})]}),n==="signin"&&l.jsxs("form",{onSubmit:E,children:[l.jsx("p",{children:"Sign in with your Staff Hub account to edit the site."}),d?l.jsxs("label",{children:["Code from your authenticator app",l.jsx("input",{inputMode:"numeric",autoComplete:"one-time-code",pattern:"[0-9]{6}",maxLength:6,value:c,onChange:w=>u(w.target.value),required:!0,autoFocus:!0})]}):l.jsxs(l.Fragment,{children:[l.jsxs("label",{children:["Email",l.jsx("input",{type:"email",autoComplete:"username",value:r,onChange:w=>i(w.target.value),required:!0})]}),l.jsxs("label",{children:["Password",l.jsx("input",{type:"password",autoComplete:"current-password",value:o,onChange:w=>a(w.target.value),required:!0})]})]}),(_||t)&&l.jsx("p",{className:"ed-error",role:"alert",children:_||t}),l.jsxs("div",{className:"ed-row",children:[l.jsx("button",{type:"submit",className:"primary",disabled:N,children:N?"Signing in…":d?"Verify":"Sign in"}),l.jsx("button",{type:"button",onClick:s,children:"Close"})]})]})]})})}function Ws(n){const[e,t]=v.useState(()=>n.getBoundingClientRect());return v.useEffect(()=>{const s=()=>t(n.getBoundingClientRect());window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s);const r=setInterval(s,400);return()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s),clearInterval(r)}},[n]),e}function sc({field:n}){const e=Ws(n.el),t=Math.max(8,e.top-46),s=Math.min(Math.max(8,e.left),window.innerWidth-330),r=(a,c)=>{n.el.focus(),document.execCommand(a,!1,c),n.el.dispatchEvent(new Event("input",{bubbles:!0}))},i=()=>{const a=window.prompt("Link address (https://…, mailto:… or tel:…)","https://");if(a==null)return;const c=mr(a);if(!c){window.alert("That link isn’t allowed. Use an address starting https://, mailto: or tel:.");return}r("createLink",c)},o=(a,c,u)=>l.jsx("button",{type:"button",title:c,"aria-label":c,onMouseDown:d=>d.preventDefault(),onClick:u,children:a});return l.jsxs("div",{className:"ed-toolbar",style:{top:t,left:s},role:"toolbar","aria-label":"Text formatting",children:[o(l.jsx("b",{children:"B"}),"Bold",()=>r("bold")),o(l.jsx("i",{children:"I"}),"Italic",()=>r("italic")),o("Link","Add a link",i),o("Unlink","Remove link",()=>r("unlink")),o("• List","Bulleted list",()=>r("insertUnorderedList")),o("1. List","Numbered list",()=>r("insertOrderedList")),o("Clear","Remove formatting",()=>r("removeFormat"))]})}function rc({field:n,draft:e,onReset:t}){const s=Ws(n.el),r=n.el.dataset.editKey;return!r||e.text[r]==null?null:l.jsx("button",{type:"button",className:"ed-reset",style:{top:Math.max(8,s.top-(n.heading?40:86)),left:Math.min(Math.max(8,s.left),window.innerWidth-170)},onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:"Back to original"})}function ic({k:n,fallback:e,credits:t,list:s,photoUrl:r,onChange:i,onClose:o,addBlob:a}){const c=Array.isArray(s)&&s.length>0,u=c?s:e.map(h=>({src:h.src,alt:h.alt||"",credit:"",creditHref:""})),[d,g]=v.useState(""),[_,b]=v.useState(0),N=v.useRef(null),A=h=>i(h.length?h:null),E=(h,y)=>A(u.map((T,k)=>k===h?{...T,...y}:T)),w=(h,y)=>{const T=[...u],[k]=T.splice(h,1);T.splice(h+y,0,k),A(T)},S=h=>A(u.filter((y,T)=>T!==h));async function P(h){g("");const y=[];for(const T of Array.from(h||[])){b(k=>k+1);try{const k=await ec(T),F=`site-draft/${Qa()}`;await $s(tt(nt,F),k,{contentType:"image/jpeg"}),a(F,URL.createObjectURL(k)),y.push({path:F,alt:"",credit:"",creditHref:""})}catch(k){g(k.code?Le(k):k.message)}b(k=>k-1)}y.length&&A([...u,...y].slice(0,12)),N.current&&(N.current.value="")}const C=h=>h.path?r(h.path):h.url||h.src;return l.jsx("div",{className:"ed-modal",role:"dialog","aria-modal":"true","aria-labelledby":"ed-photos-title",onKeyDown:h=>{h.key==="Escape"&&o()},children:l.jsxs("div",{className:"ed-card wide",children:[l.jsx("h2",{id:"ed-photos-title",children:"Photos"}),l.jsx("p",{className:"ed-help",children:"One photo shows on its own. Two or more become a slideshow that changes every 10 seconds. Describe each photo for people using screen readers."}),l.jsxs("ul",{className:"ed-photos",children:[u.map((h,y)=>l.jsxs("li",{children:[l.jsx("img",{src:C(h),alt:""}),l.jsxs("div",{className:"ed-photo-fields",children:[l.jsxs("label",{children:["Description",l.jsx("input",{value:h.alt||"",maxLength:300,onChange:T=>E(y,{alt:T.target.value}),placeholder:"What the photo shows"})]}),t&&l.jsxs(l.Fragment,{children:[l.jsxs("label",{children:["Credit",l.jsx("input",{value:h.credit||"",maxLength:300,onChange:T=>E(y,{credit:T.target.value}),placeholder:"Photographer, source, licence"})]}),l.jsxs("label",{children:["Credit link",l.jsx("input",{value:h.creditHref||"",maxLength:500,onChange:T=>E(y,{creditHref:T.target.value}),placeholder:"https://… (optional)"})]})]})]}),l.jsxs("div",{className:"ed-photo-move",children:[l.jsx("button",{type:"button",onClick:()=>w(y,-1),disabled:y===0,"aria-label":"Move earlier",children:"↑"}),l.jsx("button",{type:"button",onClick:()=>w(y,1),disabled:y===u.length-1,"aria-label":"Move later",children:"↓"}),l.jsx("button",{type:"button",onClick:()=>S(y),"aria-label":"Remove photo",children:"Remove"})]})]},`${h.path||h.url||h.src}-${y}`)),!u.length&&l.jsx("li",{className:"ed-none",children:"No photos here. Add one, or use the original."})]}),t&&c&&l.jsx("p",{className:"ed-help",children:"Only use photos you have permission to use, and give the credit the licence asks for."}),d&&l.jsx("p",{className:"ed-error",role:"alert",children:d}),l.jsxs("div",{className:"ed-row",children:[l.jsxs("label",{className:"ed-file",children:[_?"Uploading…":"Add photos",l.jsx("input",{ref:N,type:"file",accept:"image/jpeg,image/png,image/webp",multiple:!0,onChange:h=>P(h.target.files),disabled:!!_})]}),c&&l.jsxs("button",{type:"button",onClick:()=>i(null),children:["Use the original photo",e.length===1?"":"s"]}),l.jsx("button",{type:"button",className:"primary",onClick:o,children:"Done"})]})]})})}function oc({order:n,onChange:e,onClose:t}){const s=(r,i)=>{const o=[...n],[a]=o.splice(r,1);o.splice(r+i,0,a),e(o)};return l.jsx("div",{className:"ed-modal",role:"dialog","aria-modal":"true","aria-labelledby":"ed-sections-title",onKeyDown:r=>{r.key==="Escape"&&t()},children:l.jsxs("div",{className:"ed-card",children:[l.jsx("h2",{id:"ed-sections-title",children:"Homepage sections"}),l.jsx("p",{className:"ed-help",children:"The welcome photo and This week always come first. Change the order of the rest."}),l.jsx("ol",{className:"ed-sections",children:n.map((r,i)=>l.jsxs("li",{children:[l.jsx("span",{children:vt[r]}),l.jsx("button",{type:"button",onClick:()=>s(i,-1),disabled:i===0,"aria-label":`Move ${vt[r]} up`,children:"↑"}),l.jsx("button",{type:"button",onClick:()=>s(i,1),disabled:i===n.length-1,"aria-label":`Move ${vt[r]} down`,children:"↓"})]},r))}),l.jsxs("div",{className:"ed-row",children:[l.jsx("button",{type:"button",onClick:()=>e(Ue),children:"Original order"}),l.jsx("button",{type:"button",className:"primary",onClick:t,children:"Done"})]})]})})}const ac="A web address (https://…), an email (mailto:name@example.com), a phone number (tel:+441564660303), or a part of this page (#book, #eat, #stay, #whats-on, #hire, #visit, #nearby).";function cc({spec:n,text:e,setText:t,onClose:s}){const{k:r,label:i,href:o}=n,a=e[r]!=null?e[r]:"",c=e[`${r}.href`]!=null?e[`${r}.href`]:"",u=c.trim()!==""&&!Ot(c),d=e[r]!=null||e[`${r}.href`]!=null,g=()=>{u||s()};return l.jsx("div",{className:"ed-modal",role:"dialog","aria-modal":"true","aria-labelledby":"ed-link-title",onKeyDown:_=>{_.key==="Escape"&&g()},children:l.jsxs("div",{className:"ed-card",children:[l.jsx("h2",{id:"ed-link-title",children:"Button or link"}),l.jsxs("label",{children:["Words on it",l.jsx("input",{value:a,maxLength:200,placeholder:i,onChange:_=>t(r,_.target.value),autoFocus:!0})]}),l.jsxs("label",{children:["Where it goes",l.jsx("input",{value:c,maxLength:600,placeholder:o,onChange:_=>t(`${r}.href`,_.target.value),inputMode:"url",autoCapitalize:"off",spellCheck:"false"})]}),l.jsxs("p",{className:"ed-help",children:[ac," Leave a box empty to keep the original shown in grey."]}),u&&l.jsx("p",{className:"ed-error",role:"alert",children:"That address isn’t allowed. Start it with https://, mailto: or tel:, or use a part of the page like #book."}),l.jsxs("div",{className:"ed-row",children:[d&&l.jsx("button",{type:"button",onClick:()=>{t(r,""),t(`${r}.href`,"")},children:"Back to original"}),l.jsx("button",{type:"button",className:"primary",onClick:g,disabled:u,children:"Done"})]})]})})}const jn={double:"Double bed",king:"King size bed",single:"Single bed",shower:"Shower",bath:"Bath",tv:"Television",kettle:"Tea and coffee",heating:"Heating",hairdryer:"Hairdryer",towels:"Towels",bedding:"Extra bedding",historic:"Historic room"};function Fn({f:n,value:e,onChange:t}){const s=n.type==="url"&&e.trim()!==""&&!Ot(e);let r;if(n.type==="rich")r=l.jsx("span",{className:"ed-rich-note",children:"Change these words on the page: click them."});else if(n.type==="textarea"||n.type==="lines")r=l.jsx("textarea",{value:e,maxLength:n.max||3e3,rows:(n.type==="lines",3),onChange:i=>t(i.target.value),placeholder:n.placeholder||""});else if(n.type==="icons"){const i=new Set(e.split(",").map(o=>o.trim()).filter(Boolean));r=l.jsx("span",{className:"ed-icons",children:Object.entries(jn).map(([o,a])=>l.jsxs("span",{className:"ed-check",children:[l.jsx("input",{type:"checkbox",id:`ic-${n.name}-${o}-${n._row}`,checked:i.has(o),onChange:c=>{const u=new Set(i);c.target.checked?u.add(o):u.delete(o),t(Object.keys(jn).filter(d=>u.has(d)).join(","))}}),l.jsx("label",{htmlFor:`ic-${n.name}-${o}-${n._row}`,children:a})]},o))})}else r=l.jsx("input",{value:e,maxLength:n.max||600,inputMode:n.type==="number"?"numeric":n.type==="url"?"url":void 0,autoCapitalize:n.type==="url"?"off":void 0,spellCheck:n.type==="url"?"false":void 0,placeholder:n.placeholder||"",onChange:i=>t(n.type==="number"?i.target.value.replace(/[^0-9]/g,""):i.target.value)});return l.jsxs("div",{className:"ed-fieldrow",children:[n.type==="icons"?l.jsx("span",{className:"ed-flabel",children:n.label}):l.jsxs("label",{className:"ed-flabel",children:[n.label,n.type!=="rich"&&r]}),(n.type==="icons"||n.type==="rich")&&r,n.help&&l.jsx("span",{className:"ed-help",children:n.help}),s&&l.jsx("span",{className:"ed-error",role:"alert",children:"That address isn’t allowed. Use https://, mailto:, tel: or a part of the page like #book."})]})}function lc({spec:n,text:e,setText:t,onClose:s}){const{key:r,fields:i,fallback:o,title:a,help:c,record:u,extras:d=[],newItem:g,itemName:_="item",max:b=40,min:N=0}=n,A=e[r],E=A!=null&&A!=="",w=u?hr(A,i,o,!1)||o:fr(A,i,!1)||o,S=I=>t(r,JSON.stringify(I)),P=(I,R,L)=>{S(u?{...w,[R]:L}:w.map((Z,de)=>de===I?{...Z,[R]:L}:Z))},C=(I,R)=>{const L=[...w],[Z]=L.splice(I,1);L.splice(I+R,0,Z),S(L)},h=I=>S(w.filter((R,L)=>L!==I)),y=()=>{const I={};for(const R of i)I[R.name]="";S([...w,{...I,...g?g():{}}])},T=(u?[w]:w).some(I=>i.some(R=>R.type==="url"&&(I[R.name]||"").trim()&&!Ot(I[R.name]))),k=i.filter(I=>!I.hidden),F=()=>{T||s()},_e=I=>e[I.k]!=null?e[I.k]:"";return l.jsx("div",{className:"ed-modal",role:"dialog","aria-modal":"true","aria-labelledby":"ed-list-title",onKeyDown:I=>{I.key==="Escape"&&F()},children:l.jsxs("div",{className:"ed-card wide",children:[l.jsx("h2",{id:"ed-list-title",children:a}),c&&l.jsx("p",{className:"ed-help",children:c}),u?l.jsx("div",{className:"ed-item",children:k.map(I=>l.jsx(Fn,{f:{...I,_row:0},value:w[I.name]||"",onChange:R=>P(0,I.name,R)},I.name))}):l.jsxs("ol",{className:"ed-items",children:[w.map((I,R)=>l.jsxs("li",{className:"ed-item",children:[l.jsxs("div",{className:"ed-item-head",children:[l.jsx("b",{children:(I[k[0].name]||"").replace(/<[^>]*>/g,"").slice(0,60)||`New ${_}`}),l.jsxs("span",{className:"ed-item-move",children:[l.jsx("button",{type:"button",onClick:()=>C(R,-1),disabled:R===0,"aria-label":`Move ${_} ${R+1} up`,children:"↑"}),l.jsx("button",{type:"button",onClick:()=>C(R,1),disabled:R===w.length-1,"aria-label":`Move ${_} ${R+1} down`,children:"↓"}),l.jsx("button",{type:"button",onClick:()=>h(R),disabled:w.length<=N,"aria-label":`Remove ${_} ${R+1}`,children:"Remove"})]})]}),k.map(L=>l.jsx(Fn,{f:{...L,_row:R},value:I[L.name]||"",onChange:Z=>P(R,L.name,Z)},L.name))]},R)),!w.length&&l.jsx("li",{className:"ed-none",children:"Nothing here yet."})]}),!u&&w.length<b&&l.jsx("div",{className:"ed-row",children:l.jsxs("button",{type:"button",onClick:y,children:["Add ",_]})}),d.length>0&&l.jsxs("div",{className:"ed-extras",children:[l.jsx("h3",{children:n.extrasTitle||"Other words"}),d.map(I=>l.jsxs("label",{className:"ed-flabel",children:[I.label,l.jsx("input",{value:_e(I),maxLength:400,placeholder:I.fallback,onChange:R=>t(I.k,R.target.value)})]},I.k)),l.jsx("p",{className:"ed-help",children:"Leave a box empty to keep the original shown in grey."})]}),T&&l.jsx("p",{className:"ed-error",role:"alert",children:"One of the links isn’t allowed. Fix it before closing."}),l.jsxs("div",{className:"ed-row",children:[E&&l.jsxs("button",{type:"button",onClick:()=>t(r,""),children:["Back to original ",u?"details":"list"]}),l.jsx("button",{type:"button",className:"primary",onClick:F,disabled:T,children:"Done"})]})]})})}function Bn({title:n,body:e,yes:t,onYes:s,onNo:r}){return l.jsx("div",{className:"ed-modal",role:"alertdialog","aria-modal":"true","aria-labelledby":"ed-confirm-title",children:l.jsxs("div",{className:"ed-card",children:[l.jsx("h2",{id:"ed-confirm-title",children:n}),l.jsx("p",{children:e}),l.jsxs("div",{className:"ed-row",children:[l.jsx("button",{type:"button",className:"primary",onClick:s,children:t}),l.jsx("button",{type:"button",onClick:r,autoFocus:!0,children:"Cancel"})]})]})})}export{dc as default};
